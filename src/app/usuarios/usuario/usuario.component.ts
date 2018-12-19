import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
// import { CargarUsuario } from '../../store/acctions/usuario.actions';
import * as usuarioActions from '../../store/acctions';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  loading: boolean;
  error: any;

  constructor( private route: ActivatedRoute,
               private store: Store<AppState> ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params['id'];
      console.log(id);
      this.store.dispatch( new usuarioActions.CargarUsuario( id ) );
    });

    this.store.select('usuario')
      .subscribe( usuario => {
        this.user = usuario.user;
        this.loading = usuario.loading;
        this.error = usuario.error;
      });
  }

}
