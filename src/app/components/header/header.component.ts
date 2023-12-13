import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MatMenuModule, MatCheckboxModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() throws = false;
  @Input() taunts = false;
  @Input() inputMoves = false;
  @Input() echoFighters = false;
  @Input() miis = false;

  @Output() throwsChange = new EventEmitter<boolean>();
  @Output() tauntsChange = new EventEmitter<boolean>();
  @Output() inputMovesChange = new EventEmitter<boolean>();
  @Output() echoFightersChange = new EventEmitter<boolean>();
  @Output() miisChange = new EventEmitter<boolean>();

  changeThrows() {
    this.throwsChange.emit(this.throws);
  }

  changeTaunts() {
    this.tauntsChange.emit(this.taunts);
  }

  changeInputMoves() {
    this.inputMovesChange.emit(this.inputMoves);
  }

  changeEchoFighters() {
    this.echoFightersChange.emit(this.echoFighters);
  }

  changeMiis() {
    this.miisChange.emit(this.miis);
  }
}
