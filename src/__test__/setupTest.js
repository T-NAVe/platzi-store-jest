// eslint-disable-next-line
import { configure } from 'enzyme';
// eslint-disable-next-line
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// eslint-disable-next-line
global.fetch = require('jest-fetch-mock');
