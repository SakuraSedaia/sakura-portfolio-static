import { For } from 'solid-js';
import IconBundle from '~/components/media/icon-bundle.tsx';
import { Href } from '~/components/routing/Href.tsx';
import type { ContactResponse } from '~/lib/types';

const contacts: ContactResponse[] = [
  {
    type: 'email',
    label: 'Email',
    icon: 'envelope',
    value: 'email@sakura-sedaia.com',
    href: 'mailto:email@sakura-sedaia.com',
  },
  {
    type: 'discord_user',
    label: 'Discord',
    icon: 'discord',
    value: '705154478382252053',
    href: 'https://discord.com/users/705154478382252053',
  },
  {
    type: 'telegram',
    label: 'Telegram',
    icon: 'telegram',
    value: 'SakuraSedaia',
    href: 'https://t.me/SakuraSedaia',
  },
];

export default function BackupContact() {
  return (
    <article class={'get-in-touch'}>
      <h2>Contact</h2>
      <p>
        Like what you see and want to work with me? Feel free to shoot me an
        email, or a message on Discord or Telegram!
      </p>
      <div class="actions">
        <For each={contacts}>
          {(item) => (
            <Href href={item.href} class={'button'}>
              {item.label} <IconBundle name={item.icon ?? ''} />
            </Href>
          )}
        </For>
      </div>
    </article>
  );
}
