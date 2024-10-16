import DefaultLayout from '@/components/Layout/DefaultLayout';
import Header from '@/components/Layout/DefaultLayout';
import TodoPost from '@/components/POST/Post';
import React from 'react';
import { View, Text } from 'react-native';

export default function HomePage() {
  return (
    <DefaultLayout>
      <View className="mx-auto min-h-full min-w-full">
       <TodoPost/>
    </View>
    </DefaultLayout>
  );
}
