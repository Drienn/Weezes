import React from 'react';

const zipStatsObj = {
  'AVG PRICE': '$325,000',
  'AVG PRICE/SQFT': '$158/SQFT',
  'AVG DAYS': '21',
  'AVG SQ/FT': '2,350',
};

const keys = Object.keys(zipStatsObj);
const values = Object.values(zipStatsObj);

const bodyKeys = (
  <div className="column">
    {keys.map(key => (
      <span className="color-text text-bold" style={{ marginTop: 10, marginBottom: 10 }} key={key}>
        {key}
      </span>
    ))}
  </div>
);

const bodyValues = (
  <div className="column">
    {values.map(value => (
      <span
        className="color-text text-bold"
        style={{ marginTop: 10, marginBottom: 10 }}
        key={value}
      >
        {value}
      </span>
    ))}
  </div>
);

const separator = <div style={{ width: 1, backgroundColor: 'white', opacity: 0.2 }} />;

const ZipStatsBody = (
  <div className="space-between">
    {bodyKeys}
    {' '}
    {separator}
    {' '}
    {bodyValues}
  </div>
);

export default ZipStatsBody;
