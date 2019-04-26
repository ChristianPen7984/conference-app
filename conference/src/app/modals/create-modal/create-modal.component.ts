import { Component, OnInit, Input } from '@angular/core';
import { ModalServicesService } from 'src/app/services/modal-services.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  @Input()
  conference: {name: string, val: string}[];

  constructor(private modalService: ModalServicesService) {
  }

  ngOnInit() {
  }

  close(): void {
    this.modalService.setCreateDisplay(false);
  }

}
