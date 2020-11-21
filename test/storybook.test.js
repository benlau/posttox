import initStoryshots from '@storybook/addon-storyshots';
import { createSerializer } from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

initStoryshots({
  renderer: Enzyme.mount,
  snapshotSerializers: [createSerializer()],
});
