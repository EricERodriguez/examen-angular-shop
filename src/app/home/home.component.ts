import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  template: `
  <div class="animated fadeIn">
    <div class="text-center">
      <img src="assets/image/imgHome/varon.webp" style="width: 100%;">
    </div>
    <div style="display: flex;">
      <div style="width: 20%; margin-left: 5%">
        <h3>COLLECTION</h3>
        <hr>
        <h5 style="color: grey;">It is a long established fact that a reader will bedistracted</h5>
        <button type="button" class="btn btn-outline-secondary" style="background-color: black;">
                    <a class="nav-link" routerLink="/error404" routerLinkActive="active" style="color: white;">View all</a>
        </button>
      </div>
      <div style="display: flex; margin-left: 5%">
        <div  >
          <img style="width: 100%; padding: 5%" src="http://blueskytechco.net/hermes/pub/media/wysiwyg/home3/banner11.jpg">
        </div>
        <div  >
          <img style="width: 100%; padding: 5%" src="http://blueskytechco.net/hermes/pub/media/wysiwyg/home3/banner12.jpg">
        </div>
      </div>
    </div>
    <div class="text" style="background-color: #131313; display: flex">
      
      <img src="https://cortesdepelohombres.com/wp-content/uploads/2019/05/Barba-bien-desarreglada-en-hombre-con-bigote.jpg" style="width: 40%; opacity: 0.7">
      <div style="display: flex; margin-left: 5%">
        <div  >
          <img style="width: 100%; padding: 5%;padding-top: 30%" src="http://blueskytechco.net/hermes/pub/media/catalog/product/cache/bf1c37b68ea13271e1572781d430ccca/1/3/13.jpg">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-outline-primary"><a class="nav-link" routerLink="/error404" routerLinkActive="active" style="color: white;">View all</a></button>
          </div>
        </div>
        <div >
          <img style="width: 100%; padding: 5%;padding-top: 30%" src="http://blueskytechco.net/hermes/pub/media/catalog/product/cache/bf1c37b68ea13271e1572781d430ccca/1/3/13.jpg">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-outline-primary"><a class="nav-link" routerLink="/error404" routerLinkActive="active" style="color: white;">View all</a></button>
          </div>
        </div>
        
      </div>
    </div>

    <div>

    <div class="card-group">
  <div class="card">
    <img src="https://i.pinimg.com/236x/46/35/b3/4635b39765a742d50031d5ae68721d42.jpg" class="card-img-top" style="padding: 4%">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://i.pinimg.com/236x/46/35/b3/4635b39765a742d50031d5ae68721d42.jpg" class="card-img-top" style="padding: 4%">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="https://i.pinimg.com/236x/46/35/b3/4635b39765a742d50031d5ae68721d42.jpg" class="card-img-top" style="padding: 4%">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </div>

<style>
  .animated {
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.fast {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fadeIn {
    animation-name: fadeIn;
}
</style>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  name = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public LoginService: LoginService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      this.name = res.username
    })
  }

}
