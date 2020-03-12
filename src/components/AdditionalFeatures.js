import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

import { addFeature } from '../actions/shopActions'

const AdditionalFeatures = props => {
  console.log('props in Additional Features', props)
  console.log(addFeature)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeatures);
