import { Component } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  faSpinner = faSpinner;
}
