import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  drawACardAnimation = false;
  currentCard: string = '';
  game = new Game;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game)
  }


  drawACard() {
    if (!this.drawACardAnimation) {
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard);
      this.drawACardAnimation = true;

      console.log('new card'+this.currentCard)
      console.log('game is'+ this.game)

      setTimeout(() => {
        this.drawACardAnimation = false;
        this.game.playedCards.push(this.currentCard);
      }, 1000);
    }
  }
}
