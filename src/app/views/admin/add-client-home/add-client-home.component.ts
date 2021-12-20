import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClientService} from "../../../services/client.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from "../../../moduls/client";
import {MapsAPILoader} from "@agm/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MaisonService} from "../../../services/maison.service";
import {ProfileService} from "../../../services/profile.service";
import {AssetService} from "../../../services/asset.service";
import {Asset} from "../../../moduls/asset";

@Component({
  selector: 'app-add-client-home',
  templateUrl: './add-client-home.component.html',
})
export class AddClientHomeComponent implements OnInit {

  id: string;
  client: Client;
  assets: Asset[];
  assetId: number;


  //for maps
  title: string = 'AGM project';
  latitude!: number;
  longitude!: number;
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  //---- end ->


  addHouseForm = new FormGroup({
    location : new FormControl(null, Validators.required),
    city : new FormControl(null, [Validators.required]),
    zipCode : new FormControl(null, [Validators.required, Validators.pattern("^[0-9]{5}")]),
    area : new FormControl(null, [Validators.required, Validators.min(20)]),
    chamberNumber : new FormControl(null, [Validators.required, Validators.min(0)]),
    toiletNumber : new FormControl(null, [Validators.required, Validators.min(0)]),
    bathroomNumber : new FormControl(null, [Validators.required, Validators.min(0)]),
    floorsNumber : new FormControl(null, [Validators.required, Validators.min(0)]),
    rentPrice : new FormControl(null, [Validators.required, Validators.min(0)]),
    elevator : new FormControl(false  , Validators.required),
    assetType : new FormControl(null  , Validators.required),
    latitude : new FormControl(null),
    longitude : new FormControl(null)
  })

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private homeService: MaisonService,
    private profileService: ProfileService,
    private assetService: AssetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getClient();
    this.getAllAssets();


    //for maps
    this.mapsAPILoader.load().then(() => {
    });
  }

  getClient(){
    this.clientService.getById(this.id).subscribe(res =>{
      this.client = res;
    })
  }


  addHome(){
    this.addHouseForm.get('latitude').setValue(this.latitude);
    this.addHouseForm.get('longitude').setValue(this.longitude);
    this.assetService.getByType(this.addHouseForm.get('assetType').value).subscribe(res =>{
      this.assetId = res.id;
      this.homeService.addHouse(this.addHouseForm.value, this.id, this.profileService.getUserId(), this.assetId).subscribe();
      this.router.navigate(['admin/houses'])
        .then(() => {
          window.location.reload();
        });
    });
  }



  getUserId(){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  getAllAssets(){
    this.assetService.getAllAssets().subscribe(res =>{
      this.assets = res;
    })
  }


  onMapClicked(event: any){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

}
