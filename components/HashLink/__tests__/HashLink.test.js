import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import HashLink from '../HashLink';

describe('HashLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(<HashLink>Test</HashLink>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<HashLink className="test-class">Test</HashLink>);
  });

  it('should contain id without spaces', () => {
    const requiredProps = {
      id: 'Who We Serve',
    };

    const wrapper = shallow(<HashLink {...requiredProps} />);

    expect(wrapper.find('#who-we-serve')).toExist(true);
  });

  it('should contain id without an exclamation mark', () => {
    const requiredProps = {
      id: 'JOIN TODAY!',
    };

    const wrapper = shallow(<HashLink {...requiredProps} />);

    expect(wrapper.find('#join-today')).toExist(true);
  });

  it('should contain id without a question mark', () => {
    const requiredProps = {
      id: 'WANT TO BECOME A SPONSOR?',
    };

    const wrapper = shallow(<HashLink {...requiredProps} />);

    expect(wrapper.find('#want-to-become-a-sponsor')).toExist(true);
  });

  it('should contain hashlink', () => {
    const requiredProps = {
      id: 'GENERAL QUESTIONS',
    };

    const wrapper = shallow(<HashLink {...requiredProps} />);

    expect(wrapper.find({ href: '#general-questions' })).toExist(true);
  });
});
