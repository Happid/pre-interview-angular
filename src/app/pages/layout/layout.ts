import { Component } from '@angular/core';
import { Header } from '../../shared/component/header/header';
import { Footer } from '../../shared/component/footer/footer';
import { Sidebar } from '../../shared/component/sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
