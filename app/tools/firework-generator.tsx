import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import colorCodes from '../_constants/chatcolors';

interface Shape {
  name: string;
  type: 'BALL' | 'BALL_LARGE' | 'STAR' | 'CREEPER' | 'BURST';
}

interface Firework {
  primaryColor: string;
  fadingColor?: string;
  shape: Shape;
  hasFlicker: boolean;
  hasTrail: boolean;
  flightPower: number;
}

const AVAILABLE_COLORS = colorCodes

const AVAILABLE_SHAPES: Shape[] = [
  { name: 'Ball', type: 'BALL' },
  { name: 'Large Ball', type: 'BALL_LARGE' },
  { name: 'Star', type: 'STAR' },
  { name: 'Creeper', type: 'CREEPER' },
  { name: 'Burst', type: 'BURST' },
];

export default function FireworkGenerator() {
  const [firework, setFirework] = useState<Firework>({
    primaryColor: "",
    shape: AVAILABLE_SHAPES[0],
    hasFlicker: false,
    hasTrail: false,
    flightPower: 1,
  });

  const generateSpigotCode = (firework: Firework): string => {
    return '';
  };

  return (
    <ScrollView>
      <View>
      </View>
    </ScrollView>
  );
}