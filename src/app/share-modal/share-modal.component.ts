import { Component } from '@angular/core';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.css']
})
export class ShareModalComponent {
  isPopupVisible = false;
  copyButtonText = 'Copy';

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  copyLink() {
    const input = document.createElement('input');
    input.value = 'example.com/share-link';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    this.copyButtonText = 'Copied';

    setTimeout(() => {
      this.copyButtonText = 'Copy';
    }, 3000);
  }
}
