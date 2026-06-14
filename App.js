import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [target, setTarget] = useState({ x: width / 2, y: height / 2 });

  const handleTouch = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    setTarget({ x: pageX, y: pageY });
  };

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true} onResponderRelease={handleTouch}>
      {/* Barra de Status Superior */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>SISTEMA ALINHADO - V10.0</Text>
      </View>

      {/* Painel de LEDs Laterais */}
      <View style={styles.ledContainerLeft}>
        <View style={[styles.led, styles.ledOn]} />
        <View style={[styles.led, styles.ledOn]} />
        <View style={[styles.led, styles.ledOn]} />
      </View>

      <View style={styles.ledContainerRight}>
        <View style={[styles.led, styles.ledOn]} />
        <View style={[styles.led, styles.ledOn]} />
        <View style={[styles.led, styles.ledOn]} />
      </View>

      {/* Retículo da Mira Eletrônica */}
      <View style={[styles.crosshair, { left: target.x - 40, top: target.y - 40 }]}>
        <View style={styles.aimDot} />
        <View style={styles.lineHorizontal} />
        <View style={styles.lineVertical} />
        <View style={styles.outerCircle} />
      </View>

      {/* Coordenadas na Tela */}
      <View style={styles.coordinatesContainer}>
        <Text style={styles.coordText}>X: {target.x.toFixed(1)}</Text>
        <Text style={styles.coordText}>Y: {target.y.toFixed(1)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C', // Cinza escuro industrial
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBar: {
    position: 'absolute',
    top: 40,
    backgroundColor: '#2A2A2A',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  statusText: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  ledContainerLeft: {
    position: 'absolute',
    left: 20,
    height: 120,
    justifyContent: 'space-between',
  },
  ledContainerRight: {
    position: 'absolute',
    right: 20,
    height: 120,
    justifyContent: 'space-between',
  },
  led: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#000',
  },
  ledOn: {
    backgroundColor: '#00FF00', // LED Verde aceso
    shadowColor: '#00FF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
  },
  crosshair: {
    position: 'absolute',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aimDot: {
    width: 6,
    height: 6,
    backgroundColor: '#FF3B30', // Ponto central vermelho
    borderRadius: 3,
    position: 'absolute',
  },
  lineHorizontal: {
    width: 40,
    height: 2,
    backgroundColor: '#FFD700', // Linha amarela
    position: 'absolute',
  },
  lineVertical: {
    width: 2,
    height: 40,
    backgroundColor: '#FFD700',
    position: 'absolute',
  },
  outerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#FFD700',
    borderStyle: 'dashed',
    position: 'absolute',
  },
  coordinatesContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 8,
  },
  coordText: {
    color: '#FFF',
    fontFamily: 'monospace',
    fontSize: 16,
  },
});