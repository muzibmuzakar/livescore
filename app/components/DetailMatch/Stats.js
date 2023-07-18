import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { sizes } from '../../constants/theme';

const Stats = ({match, stats}) => {
    const homeStats = stats[0]?.home;
    const awayStats = stats[0]?.away;

  return (
    <ScrollView>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Image source={match.homeLogo} style={styles.logo} />
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>TEAM STATS</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Image source={match.awayLogo} style={styles.logo} />
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.possesion}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Ball Possesion</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.possesion}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.shots}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Shots</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.shots}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.onGoal}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Shots On Goal</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.onGoal}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.pass}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Pass</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.pass}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.passAcc}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Pass Accuracy</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.passAcc}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.intercept}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Intercepts</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.intercept}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.tackle}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Tackles</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.tackle}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.fouls}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Fouls</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.fouls}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.yellow}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Yellow Card</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.yellow}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.red}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Red Card</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.red}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.offside}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Offside</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.offside}</Text>
            </View>
        </View>
        <View style={styles.list}>
            {/* home */}
            <View style={styles.inList}>
                <Text style={styles.total}>{homeStats.corner}</Text>
            </View>
            {/* action */}
            <View style={styles.inList}>
                <Text>Corner</Text>
            </View>
            {/* away */}
            <View style={styles.inList}>
                <Text style={styles.total}>{awayStats.corner}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default Stats;

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    inList: {
        justifyContent: 'center',
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    total: {
        fontSize: 17,
    }
})