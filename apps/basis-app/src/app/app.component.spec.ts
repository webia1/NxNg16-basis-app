import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,  RouterTestingModule],
    }).compileComponents();
  });

  /**
   * App Component has no template, only a router-outlet.
   * For demonstration purposes:
   *  - we test the only the title here
   *  - render part is commented out
   */

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain(
  //     'Angular v16 Basis App'
  //   );
  // });

  it(`should have as title 'angular-basis-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular v16 Basis App');
  });
});
