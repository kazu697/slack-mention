import { render } from '@testing-library/react'
import { SimpleButton } from './index'

test('ボタンをクリックしたら猫が更新される', () => {
  render(<SimpleButton />)
})
