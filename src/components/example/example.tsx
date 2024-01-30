import { component$, useStore } from '@builder.io/qwik';
import { s } from './styles.css';
import { type ButtonVariants } from '~/styles/button.recipe';

export const ExampleTest = component$((props: { flag: boolean }) => {
  const state = useStore({
    counter: 0,
  });

  const variant: ButtonVariants = {};

  return (
    <>
      <h1 class={s.h1}>ExampleTest</h1>
      <span>Count:{state.counter}</span>
      <div class="icon">Flag: {props.flag ? '⭐' : '💣'}</div>
      <button class="btn-counter" onClick$={() => state.counter++}>
        Increment counter
      </button>
      <button class={s.button}>aaaa</button>
    </>
  );
});
