import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../../login/login.service';
import { ClothService } from '../../../login/cloth.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  data: any;
  constructor(config: NgbModalConfig, private modalService: NgbModal, public LoginService: LoginService, public ClothService: ClothService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content:any) {
    this.modalService.open(content);
  }

  ngOnInit(): void {

    // traemos toda la data de ropa del backend
    this.ClothService.getClothing().subscribe(data => {
      this.data = data.data.results;
      // console.log(data.data.results)
    });
  }

}
