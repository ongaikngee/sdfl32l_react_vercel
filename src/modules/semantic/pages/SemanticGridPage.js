import React from 'react'
import mockImage from '../../common/assets/images/image.png'
import { LOREM_IPSUM } from '../../common/constants/common';
import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react';

const SemanticGridPage = () => {
  return (
    <Grid doubling>
      <GridRow>
        <Header as='h1'>Grid Component</Header>
      </GridRow>
      <GridRow>
        <p>This is to explore on how to configure Grid in Semantic UI</p>
      </GridRow>
      <GridRow color='red' >
        <GridColumn><p>Dividing Grid into 2 columns</p></GridColumn>
      </GridRow>
      <GridRow color='red' columns={2} divided >
        <GridColumn>
          <Header as='h2'>Column1</Header>
        </GridColumn>
        <GridColumn>
          <Header as='h2'>Column2</Header>
        </GridColumn>
      </GridRow>
      <GridRow color='orange' >
        <GridColumn><p>Dividing Grid into 6 columns</p></GridColumn>
      </GridRow>
      <GridRow color='orange' columns={6}>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
      </GridRow>
      <GridRow color='yellow'>
        <GridColumn>
          <p>Having 3 column in the centre. Using the centered keyword and having delare 1 more column in the GridRow</p>
        </GridColumn>
      </GridRow>
      <GridRow color='yellow' columns={4} centered>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
        <GridColumn>
          <img src={mockImage} />
        </GridColumn>
      </GridRow>
      <GridRow color='olive'>
        <GridColumn>
          <Header as='h3'>textAlign</Header>
          <p>Getting Text Aligned - textAlign='center/right'</p>
          <ul>
            <li>can be used in Grid and GridColumn. Will not have effect on GridRow</li>
            <li>When used in Grid, it will take effect for the entire Grid. Use with care.</li>
          </ul>
        </GridColumn>
      </GridRow>
      <GridRow color='olive' columns={4} centered divided>
        <GridColumn color='grey'>
          Left - textAlign
        </GridColumn>
        <GridColumn color='grey' textAlign='center'>
          center - textAlign
        </GridColumn>
        <GridColumn color='grey' textAlign='right'>
          right - textAlign
        </GridColumn>
      </GridRow>
      <GridRow color='green'>
        <GridColumn><p>Can I have 9 x 9 </p></GridColumn>
      </GridRow>
      <GridRow color='green' columns={4} centered>
        <GridColumn color='red' width={3}>Red</GridColumn>
        <GridColumn color='orange' width={8}>Orange</GridColumn>
        <GridColumn color='yellow' width={3}>Yellow</GridColumn>
      </GridRow>
      <GridRow color='green' columns={4} centered>
        <GridColumn color='olive' width={3}>Olive</GridColumn>
        <GridColumn color='green' width={8}>Green</GridColumn>
        <GridColumn color='teal' width={3}>Teal</GridColumn>
      </GridRow>
      <GridRow color='green' columns={4} centered>
        <GridColumn color='blue' width={3}>Blue</GridColumn>
        <GridColumn color='violet' width={8}>Violet</GridColumn>
        <GridColumn color='purple' width={3}>Purple</GridColumn>
      </GridRow>
      <GridRow color='teal'>
        <GridColumn>
          <Header as='h3'>Nested Grid</Header>
          <p>Can I have nested grid?</p>
        </GridColumn>
      </GridRow>
      <GridRow color='teal' columns={2} centered>
        <GridColumn>
          <Grid textAlign='center'>
            <GridRow color='red' columns={3} centered>
              <GridColumn color='black'>
                <p>1</p>
              </GridColumn>
              <GridColumn color='grey'>
                <p>1</p>
              </GridColumn>
            </GridRow>
            <GridRow color='orange' columns={3} centered>
              <GridColumn color='grey'>
                <p>1</p>
              </GridColumn>
              <GridColumn color='black'>
                <p>1</p>
              </GridColumn>
            </GridRow>
          </Grid>
        </GridColumn>
      </GridRow>
      <GridRow color='blue'>
        <GridColumn>
          <Header as='h3'>Responsive</Header>
          <p>With keyword of <b>doubling</b>, you are able to switch the column to different screen sizes:</p>
          <ul>
            <li>mobile - 767px</li>
            <li>table - 991px</li>
          </ul>
        </GridColumn>
      </GridRow>
      <GridRow color='blue'>
        <GridColumn>
          <Grid doubling columns={5}>
            <GridColumn>
              {LOREM_IPSUM.line}
            </GridColumn>
            <GridColumn>
              {LOREM_IPSUM.line}
            </GridColumn>
            <GridColumn>
              {LOREM_IPSUM.line}
            </GridColumn>
            <GridColumn>
              {LOREM_IPSUM.line}
            </GridColumn>
            <GridColumn>
              {LOREM_IPSUM.line}
            </GridColumn>
          </Grid>
        </GridColumn>
      </GridRow>
      <GridRow color='purple' columns={8}>
        <GridColumn><h1>1</h1></GridColumn>
        <GridColumn><h1>2</h1></GridColumn>
        <GridColumn><h1>3</h1></GridColumn>
        <GridColumn><h1>4</h1></GridColumn>
        <GridColumn><h1>5</h1></GridColumn>
        <GridColumn><h1>6</h1></GridColumn>
        <GridColumn><h1>7</h1></GridColumn>
        <GridColumn><h1>8</h1></GridColumn>
        <GridColumn><h1>9</h1></GridColumn>
        <GridColumn><h1>10</h1></GridColumn>
        <GridColumn><h1>11</h1></GridColumn>
        <GridColumn><h1>12</h1></GridColumn>
        <GridColumn><h1>13</h1></GridColumn>
        <GridColumn><h1>14</h1></GridColumn>
        <GridColumn><h1>15</h1></GridColumn>
        <GridColumn><h1>16</h1></GridColumn>
        <GridColumn><h1>17</h1></GridColumn>
        <GridColumn><h1>18</h1></GridColumn>
        <GridColumn><h1>19</h1></GridColumn>
        <GridColumn><h1>20</h1></GridColumn>
      </GridRow>
    </Grid>
  );
};

export default SemanticGridPage;