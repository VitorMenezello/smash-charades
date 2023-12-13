import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CHARACTERS } from './data/character.data';
import { Character } from './interfaces/character.interface';
import { Move, listMoves } from './interfaces/moves.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedChar: Character | null = null;
  selectedMove: Move | null = null;
  throws = false;
  taunts = false;
  inputMoves = false;
  echoFighters = false;
  miis = false;

  echoFilter(character: Character): boolean {
    return this.echoFighters && character.echo || !character.echo;
  }

  miiFilter(character: Character): boolean {
    const isCharMii = character.name.includes("Mii");
    return this.miis && isCharMii || !isCharMii;
  }

  randomize(): void {
    const filteredChars = CHARACTERS.filter((char: Character) => this.echoFilter(char) && this.miiFilter(char));
	  const randomCharIndex = Math.floor(filteredChars.length * Math.random());
	  this.selectedChar = filteredChars[randomCharIndex];

	  const movesList = listMoves(this.selectedChar.moves, this.throws, this.taunts, this.inputMoves);
    const randomMoveIndex = Math.floor(movesList.length * Math.random());
    this.selectedMove = movesList[randomMoveIndex];
  }
}
