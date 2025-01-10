import {booleanAttribute, Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {FinalEneritzLangoyoComponent} from "../final-eneritz-langoyo/final-eneritz-langoyo.component";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgForOf,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;
  stack: string = [];
  currentPlayer: number = 0;
  players: { name: string; points: number }[] = [];
  showFinalScore = true;

  constructor() {
    this.stack = this.generateStack();
  }
  generateStack(): string {
    return []
  }
  getCurrentPlayer(): string{
    return this.players[this.currentPlayer];
  }

  switchToNextPlayer(){
    return this.currentPlayer (this.currentPlayer + 1) % this.players.length;
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

  takeCard() {
    if(!this.pickCardAnimation && this.game){
      const card = this.game.stack.pop();
      if(card){
        this.currentCard = card;
        this.pickCardAnimation = true;
      }

      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        const currentPlayer = this.game?.getCurrentPlayer();
        if(currentPlayer){
          currentPlayer.points +=parseInt(card);
        }
        this.game?switchToNextPlayer();
        this.pickCardAnimation = false;
      }, 1000);

      isLastPlayerTurn(){
      }
    }
  }


}
