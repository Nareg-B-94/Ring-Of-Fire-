import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerDialogComponent } from './add-player-dialog/add-player-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  drawACardAnimation = false;
  currentCard: string = '';
  game = new Game();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  drawACard() {
    if (!this.drawACardAnimation) {
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard);
      this.drawACardAnimation = true;

      console.log('new card' + this.currentCard);
      console.log('game is' + this.game);

      this.game.currentPlayer++;
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.drawACardAnimation = false;
        this.game.playedCards.push(this.currentCard);
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        // console.log('The dialog was closed', name);
      }

    });
  }
}
