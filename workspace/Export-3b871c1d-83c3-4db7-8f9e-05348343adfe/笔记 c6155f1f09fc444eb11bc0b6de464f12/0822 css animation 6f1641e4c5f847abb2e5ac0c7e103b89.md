# 0822 css animation

- `[animation-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)`
- `[animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay)`
- `[animation-iteration-count](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)`
- `[animation-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)`
- `[animation-fill-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)`
- `[animation-play-state](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)`
- `[animation-name](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)`
- `[animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)`
- `[animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)`
    
    ```css
    /* @keyframes duration | easing-function | delay |
    iteration-count | direction | fill-mode | play-state | name */
    animation: 3s ease-in 1s 2 reverse both paused slidein;
    ```
    
    ```css
    @keyframes backInDown {
      0% {
        transform: translateY(-30px) scale(0.7);
        opacity: 0.7;
      }
    
      80% {
        transform: translateY(0px) scale(1);
        opacity: 0.9;
      }
    
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    
    .animate__backInDown {
      animation-name: backInDown;
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-direction: alternate;
    }
    ```