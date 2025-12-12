## pre-interview-angular

### A. Fundamental 🟣
1. OOP
2. How CSS converts to SCSS and benefits of SCSS
3. Arrow Function vs Class Function
3. What are Lifecycle Hooks (8)? Explain it!
4. Explain Decorators in Angular
5. What are Directives? Types of directives? custom directive?
6. Pipe and Custom Pipe? 
7. What is Dependency Injection? different Injection with injector? How Angular implements it? 
8. What is View Encapsulation? Types? 
9. Explain Angular Routing, Dynamic route, AuthGuard, CanActive & Lazy Loading 
10. What are Interceptors? How do you use JWT Interceptor?
11. What is one way banding and two way banding? 
12. Different between zone.js and zoneless? Different between using signal or not using signal. 
13. Security on Angular
    - XSS using DomSanitizer, cth:iFrame (Cross-Site Scripting)
    - Interceptor Token, Refresh Token, HttpOnly Cookies (Cross-Site Request Forgery)
    - AuthGuard & RoleGurad
    - Environment -> menyembunyikan API key atau URL rahasia di file TS
14. Import angular (ECMAScript Modules), express (CommonJS System) DONE
- ESM => import { Component } from '@angular/core' dan export class
- CJS => const express = require('express') dan export.module

**
8 Lifecycle Hook di Angular
- ngOnChanges -> Hanya dipanggil jika komponen punya @Input()
- ngOnInit -> Setup awal, Tempat paling umum untuk inisialisasi logika (misal: panggil API, set variabel awal).
- ngDoCheck -> Dipakai jika ingin deteksi perubahan manual (Custom change detection)
- ngAfterContentInit -> Hanya dipanggil sekali (Inisialisasi konten <ng-content>)
- ngAfterContentChecked -> Validasi konten (Setelah Angular memeriksa perubahan pada konten <ng-content>)
- ngAfterViewInit -> Setelah view dan child view selesai di-render di DOM (Aman untuk mengakses @ViewChild)
- ngAfterViewChecked -> Setelah Angular memeriksa perubahan pada view
- ngOnDestroy -> Tepat sebelum komponen dihapus dari DOM (Tempat membersihkan subscription, event listener, timer, dsb.)

### B. RxJs and State Management (ngRx) 🟢
1. What's State Management? 
2. Promise Vs Observable 
3. tap, subscribe and other general function rxjs! and how to use it? 
4. When must use async/await vs subscribe?
5. Different BehaviorSubject and Subject
6. Parent and Child Communication (@Input and @Output) vs NgRx vs Signal

### C. Simple Project 🔴
1. Form Validation (Form Module vs Reactive Form) with unit test
2. CRUD Employee (pagination, search by, sort) with JWT
3. Mini Blog (Comment Section, Replay and Other)
4. Real Time Chat
5. CSR, SSR and SSG
6. Implement Micro Frontend