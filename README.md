## pre-interview-angular

### A. Fundamental 🟣

1. OOP
2. How CSS converts to SCSS and benefits of SCSS
3. Arrow Function vs Class Function
4. What are Lifecycle Hooks (8)? Explain it!
- ngOnChanges -> Hanya dipanggil jika komponen punya @Input()
- ngOnInit -> Setup awal, Tempat paling umum untuk inisialisasi logika (misal: panggil API, set variabel awal).
- ngDoCheck -> Dipakai jika ingin deteksi perubahan manual (Custom change detection)
- ngAfterContentInit -> Hanya dipanggil sekali (Inisialisasi konten <ng-content>)
- ngAfterContentChecked -> Validasi konten (Setelah Angular memeriksa perubahan pada konten <ng-content>)
- ngAfterViewInit -> Setelah view dan child view selesai di-render di DOM (Aman untuk mengakses @ViewChild)
- ngAfterViewChecked -> Setelah Angular memeriksa perubahan pada view
- ngOnDestroy -> Tepat sebelum komponen dihapus dari DOM (Tempat membersihkan subscription, event listener, timer, dsb.)

5. Explain Decorators in Angular
- Decorator adalah fungsi khusus (metadata) yang memberi tahu Angular bagaimana sebuah class diperlakukan (component? service? module? input / output?)
- Class Decorator => @Component, @Directive, @Pipe, @Injectable
- Property Decorator => @Input(), @Output(), @ViewChild()
- Method Decorator => @HostListener()
- Parameter Decorator => @Inject()

6. What are Directives? Types of directives? custom directive?
7. Pipe and Custom Pipe?
8. What is Dependency Injection? different Injection with injector? How Angular implements it?
9. What is View Encapsulation? Types?
10. Explain Angular Routing, Dynamic route, AuthGuard, CanActive & Lazy Loading
11. What are Interceptors? How do you use JWT Interceptor?
12. What is one way banding and two way banding?
13. Different between zone.js and zoneless? Different between using signal or not using signal.
14. Security on Angular

- XSS using DomSanitizer, cth:iFrame (Cross-Site Scripting)
- Interceptor Token, Refresh Token, HttpOnly Cookies (Cross-Site Request Forgery)
- AuthGuard & RoleGurad
- Environment -> menyembunyikan API key atau URL rahasia di file TS

14. Import angular (ECMAScript Modules), express (CommonJS System) DONE

- ESM => import { Component } from '@angular/core' dan export class
- CJS => const express = require('express') dan export.module

### B. RxJs and State Management (ngRx) 🟢

1. What's State Management? mengelola, menyimpan, dan mendistribusikan data (state) agar konsisten di seluruh aplikasi. Menghindari (Prop Drilling)
2. Promise Vs Observable
3. tap, subscribe and other general function rxjs! and how to use it?
4. When must use async/await vs subscribe?
5. Different BehaviorSubject and Subject
6. Parent and Child Communication (@Input and @Output) vs NgRx vs Signal

### C. Simple Project 🔴

1. CRUD Ecommerce (Search By, Sort By, Pagination, Form Validation, Unit Test, Interceptor Token, Auth Guard)
2. Looping Reusable Card (parent child communication)
3. SEO and Translate Language 
4. Big Data (Upload Excel, Image, and Implement Service Worker)
