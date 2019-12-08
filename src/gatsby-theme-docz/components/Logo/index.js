/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'docz'

import * as styles from './styles'

export const Logo = () => {
  return (
    <Flex aligmItems="center" sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        SwiftUI Docs
      </Link>
    </Flex>
  )
}
