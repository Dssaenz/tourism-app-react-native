import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

const ContentIcon = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function BottomMenuItem({ iconName, isCurrent }) {
  return (
    <ContentIcon>
      <Icon name={iconName} size={20} style={{ color: isCurrent ? '#FFFFFF' : '#000' }} />
    </ContentIcon>
  );
}

BottomMenuItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};

export default BottomMenuItem;
