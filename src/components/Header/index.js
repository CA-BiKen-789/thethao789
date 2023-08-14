import classNames from "classnames/bind";
import styles from "./Header.module.css";

const cx = classNames.bind(styles);

function Header() {
	return (
		<div className={cx('wrapper')}>
			Header
		</div>
	);
}

export default Header;