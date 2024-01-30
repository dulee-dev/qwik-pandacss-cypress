import { component$ } from '@builder.io/qwik';
import { s } from './styles.css';
import { ExampleTest } from '~/components/example/example';

export default component$(() => {
  return (
    <div>
      <div class={s.h1}>This box is styled with PandaCSS.</div>
      <ExampleTest flag />
    </div>
  );
});
