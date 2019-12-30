import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-item/manu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { Section, DirectoryState } from '../../redux/directory/types';
import { RootState } from '../../redux/types';
import './directory.styles.scss';

const Directory: React.FC<DirectoryState> = ({ sections }) => (
  <nav className="menu">
    <ul className="menu-items">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </ul>
  </nav>
);

const mapStateToProps = createStructuredSelector<
  RootState,
  { sections: Section[] }
>({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
