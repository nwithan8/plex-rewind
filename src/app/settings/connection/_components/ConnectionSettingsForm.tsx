'use client'

import { saveConnectionSettings } from '@/actions/update-connection-settings'
import { Settings } from '@/types'
import SettingsForm from '../../_components/SettingsForm'

type Props = {
  settings: Settings
}

export default function ConnectionSettingsForm({ settings }: Props) {
  const connectionSettings = settings.connection

  return (
    <SettingsForm settings={settings} action={saveConnectionSettings}>
      <section className='group-settings group'>
        <h2 className='heading-settings'>Tautulli</h2>
        <label className='input-wrapper'>
          <input
            type='url'
            className='input'
            placeholder='http://192.168.1.2:8181'
            name='tautulliUrl'
            required
            defaultValue={connectionSettings.tautulliUrl}
          />
          <span className='label'>URL</span>
        </label>
        <label className='input-wrapper'>
          <input
            type='password'
            className='input'
            name='tautulliApiKey'
            required
            defaultValue={connectionSettings.tautulliApiKey}
          />
          <span className='label'>API key</span>
        </label>
      </section>
      <section className='group-settings group'>
        <h2 className='heading-settings'>TMDB</h2>
        <label className='input-wrapper'>
          <input
            type='password'
            className='input'
            name='tmdbApiKey'
            defaultValue={connectionSettings.tmdbApiKey}
            required
          />
          <span className='label'>API key</span>
        </label>
      </section>
      <section className='group-settings group'>
        <h2 className='heading-settings'>Overseerr</h2>
        <label className='input-wrapper'>
          <input
            type='url'
            className='input'
            placeholder='http://192.168.1.2:5055'
            name='overseerrUrl'
            defaultValue={connectionSettings.overseerrUrl}
          />
          <span className='label'>URL</span>
        </label>
        <label className='input-wrapper'>
          <input
            type='password'
            className='input'
            name='overseerrApiKey'
            defaultValue={connectionSettings.overseerrApiKey}
          />
          <span className='label'>API key</span>
        </label>
      </section>
    </SettingsForm>
  )
}
