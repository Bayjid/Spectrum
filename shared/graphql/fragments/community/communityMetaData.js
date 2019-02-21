// @flow
import gql from 'graphql-tag';

export type CommunityMetaDataType = {
  metaData: {
    channels: number,
    members: number,
    onlineMembers: number,
  },
};

export default gql`
  fragment communityMetaData on Community {
    metaData {
      channels
      members
      onlineMembers
    }
  }
`;
