import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, Observable, timer } from 'rxjs';

const baseStyles = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        // query(
        //   ':enter',
        //   [
        //     style({
        //       opacity: 0,
        //     }),
        //   ],
        //   { optional: true }
        // ),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'translateX(-50px)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                transform: 'translateX(50px)',
                opacity: 0,
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'translateX(0)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition(':decrement', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        // query(
        //   ':enter',
        //   [
        //     style({
        //       opacity: 0,
        //     }),
        //   ],
        //   { optional: true }
        // ),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'translateX(50px)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                transform: 'translateX(-50px)',
                opacity: 0,
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'translateX(0)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition('* => secondary', [
        style({
          position: 'relative',
        }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        // query(
        //   ':enter',
        //   [
        //     style({
        //       opacity: 0,
        //     }),
        //   ],
        //   { optional: true }
        // ),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'scale(0.8)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                transform: 'scale(1.5)',
                opacity: 0,
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'scale(1)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition('secondary => *', [
        style({
          position: 'relative',
        }),

        query(':enter, :leave', [baseStyles], { optional: true }),

        // query(
        //   ':enter',
        //   [
        //     style({
        //       opacity: 0,
        //     }),
        //   ],
        //   { optional: true }
        // ),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'scale(1.25)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                transform: 'scale(0.8)',
                opacity: 0,
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'scale(1)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),

    trigger('bg-anim', [
      transition(':leave', [
        animate(
          1000,
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),

    trigger('fade-anim', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(250, style({ opacity: 1 })),
      ]),

      transition(':leave', [animate(250, style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  backgroundImgs: string[] = [
    'https://images.unsplash.com/photo-1665706265218-b559683043fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NjI5OTQ0Mw&ixlib=rb-1.2.1&q=80&w=1920',
  ];

  isLoading: boolean;
  dateTime$: Observable<Date>;

  ngOnInit(): void {
    this.dateTime$ = timer(0, 1000).pipe(map(() => new Date()));
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab'];
      if (!tab) {
        return 'secondary';
      }
      return tab;
    }

    return '';
  }

  async generateRandomBackground(): Promise<any> {
    this.isLoading = true;
    const result = await fetch('https://source.unsplash.com/random/1920x1080', {
      method: 'HEAD',
    });

    const alreadyGot = this.backgroundImgs.includes(result.url);

    if (alreadyGot) {
      // same image as we currently have
      return this.generateRandomBackground();
    }

    this.backgroundImgs.push(result.url);
  }

  onBackgroundImageLoad($event: Event) {
    // remove old background image from the array as soon as new background loads
    const imgElement = $event.target as HTMLImageElement;
    const src = imgElement.src;
    this.backgroundImgs = this.backgroundImgs.filter(
      (bgSource) => bgSource === src
    );

    this.isLoading = false;
  }
}
