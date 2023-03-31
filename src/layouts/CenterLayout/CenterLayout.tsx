import { FC, PropsWithChildren } from 'react'
import cl from './CenterLayout.module.scss'

const CenterLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <main className={cl.main}>{children}</main>
}

export default CenterLayout
