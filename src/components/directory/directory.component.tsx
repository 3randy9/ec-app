import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/manu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { Section, DirectoryState } from '../../redux/directory/types';
import { RootState } from '../../redux/types';
import { MenuContainer, MenuItems } from './directory.styles';

const Directory: React.FC<DirectoryState> = ({ sections }) => (
  <MenuContainer>
    <MenuItems>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </MenuItems>
  </MenuContainer>
);

const mapStateToProps = createStructuredSelector<
  RootState,
  { sections: Section[] }
>({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
