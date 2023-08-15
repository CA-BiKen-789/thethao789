import BongDa from '~/pages/BongDa';
import BongDaVietNam from '~/pages/BongDaVietNam';
import Home from '~/pages/Home';
import NhanDinhBongDa from '~/pages/NhanDinhBongDa';
import TinBongDa from '~/pages/TinBongDa';
import Esports from '~/pages/Esports';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/bong-da', component: BongDa },
	{ path: '/nhan-dinh-bong-da', component: NhanDinhBongDa },
	{ path: '/tin-bong-da', component: TinBongDa },
	{ path: '/bong-da-viet-nam', component: BongDaVietNam },
	{ path: '/esports', component: Esports }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }