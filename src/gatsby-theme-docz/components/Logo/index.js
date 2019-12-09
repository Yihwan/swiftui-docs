/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Link } from 'docz'
import logo from 'src/images/icon.png';

import * as styles from './styles'

export const Logo = () => {
  return (
    <Flex alignItems="center" sx={styles.logo} data-testid="logo">
      <Link to="/" sx={styles.link}>
        <img sx={styles.img} src={logo} alt="swiftui-docs" />
      </Link>
    </Flex>
  )
}
