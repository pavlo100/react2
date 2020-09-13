import React, { FC } from 'react';
import { Count, Item, Topic, ScoreboardWrapper, Header, List } from '../css/components/scoreboard';
import { Topic as ITopic } from '../reducers/topic';

interface Props {
  topics: ITopic[];
}
const Scoreboard: FC<Props> = ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    return (
      <Item key={key}>
        <Topic>{topic.text}</Topic>
        <Count>{topic.count}</Count>
      </Item>
    );
  });
  return (
    <ScoreboardWrapper>
      <Header>Vote count</Header>
      <List>
        {topicListItems}
      </List>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
