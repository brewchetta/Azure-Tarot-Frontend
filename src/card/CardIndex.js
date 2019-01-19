// React
import React from  'react'
import { Redirect } from 'react-router-dom'
// Fetches
import { fetchGetAllCards } from './FetchCard'
import { fetchUnlockCard } from './FetchCard'
// Components
import CardComponent from './CardComponent'
import LessonComponent from '../lesson/LessonComponent'

export default class CardIndex extends React.Component {

  state = {
    cards: [],
    cardToInspect: null,
    cardLesson: null,
    animating: false,
    popupOpen: true
  }

  componentDidMount() {
    fetchGetAllCards()
    .then(response => {
      // This is to prevent cards from arriving out of order
      // TODO: refine this when adding more suits
      const sortedCards = response.cards.sort((a,b) => {
        return a.card_rank - b.card_rank
      })
      this.setState({ cards: sortedCards })
    })
  }

  setIndexState = (object) => {
    this.setState(object)
  }

  renderAllCards = () => {
    return this.state.cards.map((card,i) => (
      <div className='card-index-space' key={i}>
        <CardComponent card={card} indexState={this.state} currentUser={this.props.currentUser} setIndexState={this.setIndexState} />
      </div>
    ))
  }

  unlockCard = (card, user_description) => {
    const user = this.props.currentUser

    fetchUnlockCard(card, user_description, user)
    .then(console.log)
    .then(() => {
      this.props.setCurrentUser({ ...user, cards: [...user.cards, card] })
    })
  }

  renderCardIndexIntro = () => {
    const user = this.props.currentUser
    const popupOpen = this.state.popupOpen

    if (!user.cards.length) {
      return (
        <div className='onboard-popup' style={ popupOpen ? null : {left:'150%'} }>

          <p>Look at all these cards! They're very .... facedown. That's because they're not part of your deck yet.</p>

          <p>You might wonder why you have no cards in your deck and the reason is because you haven't learned any yet. Every card in the deck is significant in a different way and we want you to have some familiarity before you use a card.</p>

          <p>Don't worry, this'll still be pretty easy! Every time you learn a new card you'll add it to your deck, and once you've got at least five cards in your deck you'll get to start doing those fancy readings.</p>

          <p>Go ahead and click a card to start learning! That one in the top left looks like a good one.</p>

          <p className='onboard-popup-exit' onClick={this.exitPopup}>X</p>

        </div>
      )
    }
  }

  exitPopup = () => {
    this.setState({ popupOpen: false })
  }

  render() {
    return (
      <div className='card-index'>

        {this.renderCardIndexIntro()}

        {this.renderAllCards()}

        {/* Shows lesson if one has been selected */}
        {this.state.cardLesson ? <LessonComponent card={this.state.cardLesson} setIndexState={this.setIndexState} unlockCard={this.unlockCard} /> : null }

        {/* Redirects back to profile if not logged in */}
        {localStorage.getItem('jwt') ? null : <Redirect to='/' />}

      </div>
    )
  }
}
