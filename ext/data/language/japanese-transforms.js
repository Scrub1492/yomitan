/*
 * Copyright (C) 2024  Yomitan Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
    'language': 'ja',
    'conditions': {
        'v': {
            'name': 'Verb',
            'partsOfSpeech': ['v1', 'v5', 'vk', 'vs', 'vz'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': '動詞'
                }
            ],
            'subConditions': ['v1', 'v5', 'vk', 'vs', 'vz']
        },
        'v1': {
            'name': 'Ichidan verb',
            'partsOfSpeech': ['v1'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': '一段動詞'
                }
            ],
            'subConditions': ['v1d', 'v1p']
        },
        'v1d': {
            'name': 'Ichidan verb, dictionary form',
            'partsOfSpeech': ['v1'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': '一段動詞、辞書形'
                }
            ]
        },
        'v1p': {
            'name': 'Ichidan verb, progressive or perfect form',
            'partsOfSpeech': ['v1'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': '一段動詞、進行形または完了形'
                }
            ]
        },
        'v5': {
            'name': 'Godan verb',
            'partsOfSpeech': ['v5'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': '五段動詞'
                }
            ]
        },
        'vk': {
            'name': 'Kuru verb',
            'partsOfSpeech': ['vk'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': '来る動詞'
                }
            ]
        },
        'vs': {
            'name': 'Suru verb',
            'partsOfSpeech': ['vs'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': 'する動詞'
                }
            ]
        },
        'vz': {
            'name': 'Zuru verb',
            'partsOfSpeech': ['vz'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': 'ずる動詞'
                }
            ]
        },
        'adj-i': {
            'name': 'Adjective with i ending',
            'partsOfSpeech': ['adj-i'],
            'i18n': [
                {
                    'language': 'ja',
                    'name': '形容詞'
                }
            ]
        },
        'iru': {
            'name': 'Intermediate -iru endings for progressive or perfect tense',
            'partsOfSpeech': []
        }
    },
    'transforms': [
        {
            'name': '-ba',
            'description': 'Conditional',
            'i18n': [
                {
                    'language': 'ja',
                    'name': 'ば',
                    'description': '仮定形'
                }
            ],
            'rules': [
                {'suffixIn': 'ければ', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'えば', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'けば', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'げば', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'せば', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'てば', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ねば', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'べば', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'めば', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'れば', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1', 'v5', 'vk', 'vs', 'vz']}
            ]
        },
        {
            'name': '-chau',
            'rules': [
                {'suffixIn': 'ちゃう', 'suffixOut': 'る', 'conditionsIn': ['v5'], 'conditionsOut': ['v1']},
                {'suffixIn': 'いじゃう', 'suffixOut': 'ぐ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'いちゃう', 'suffixOut': 'く', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'しちゃう', 'suffixOut': 'す', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちゃう', 'suffixOut': 'う', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちゃう', 'suffixOut': 'く', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちゃう', 'suffixOut': 'つ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちゃう', 'suffixOut': 'る', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んじゃう', 'suffixOut': 'ぬ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んじゃう', 'suffixOut': 'ぶ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んじゃう', 'suffixOut': 'む', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じちゃう', 'suffixOut': 'ずる', 'conditionsIn': ['v5'], 'conditionsOut': ['vz']},
                {'suffixIn': 'しちゃう', 'suffixOut': 'する', 'conditionsIn': ['v5'], 'conditionsOut': ['vs']},
                {'suffixIn': '為ちゃう', 'suffixOut': '為る', 'conditionsIn': ['v5'], 'conditionsOut': ['vs']},
                {'suffixIn': 'きちゃう', 'suffixOut': 'くる', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']},
                {'suffixIn': '来ちゃう', 'suffixOut': '来る', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']},
                {'suffixIn': '來ちゃう', 'suffixOut': '來る', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-chimau',
            'rules': [
                {'suffixIn': 'ちまう', 'suffixOut': 'る', 'conditionsIn': ['v5'], 'conditionsOut': ['v1']},
                {'suffixIn': 'いじまう', 'suffixOut': 'ぐ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'いちまう', 'suffixOut': 'く', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'しちまう', 'suffixOut': 'す', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちまう', 'suffixOut': 'う', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちまう', 'suffixOut': 'く', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちまう', 'suffixOut': 'つ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っちまう', 'suffixOut': 'る', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んじまう', 'suffixOut': 'ぬ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んじまう', 'suffixOut': 'ぶ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んじまう', 'suffixOut': 'む', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じちまう', 'suffixOut': 'ずる', 'conditionsIn': ['v5'], 'conditionsOut': ['vz']},
                {'suffixIn': 'しちまう', 'suffixOut': 'する', 'conditionsIn': ['v5'], 'conditionsOut': ['vs']},
                {'suffixIn': '為ちまう', 'suffixOut': '為る', 'conditionsIn': ['v5'], 'conditionsOut': ['vs']},
                {'suffixIn': 'きちまう', 'suffixOut': 'くる', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']},
                {'suffixIn': '来ちまう', 'suffixOut': '来る', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']},
                {'suffixIn': '來ちまう', 'suffixOut': '來る', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-shimau',
            'rules': [
                {'suffixIn': 'てしまう', 'suffixOut': 'て', 'conditionsIn': ['v5'], 'conditionsOut': ['iru']},
                {'suffixIn': 'でしまう', 'suffixOut': 'で', 'conditionsIn': ['v5'], 'conditionsOut': ['iru']}
            ]
        },
        {
            'name': '-nasai',
            'rules': [
                {'suffixIn': 'なさい', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'いなさい', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'きなさい', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぎなさい', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'しなさい', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ちなさい', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'になさい', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'びなさい', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'みなさい', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'りなさい', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'じなさい', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'しなさい', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為なさい', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'きなさい', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来なさい', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來なさい', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-sou',
            'rules': [
                {'suffixIn': 'そう', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'そう', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'いそう', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'きそう', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぎそう', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'しそう', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ちそう', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'にそう', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'びそう', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'みそう', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'りそう', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'じそう', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'しそう', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為そう', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'きそう', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来そう', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來そう', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-sugiru',
            'rules': [
                {'suffixIn': 'すぎる', 'suffixOut': 'い', 'conditionsIn': ['v1'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'すぎる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v1']},
                {'suffixIn': 'いすぎる', 'suffixOut': 'う', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'きすぎる', 'suffixOut': 'く', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぎすぎる', 'suffixOut': 'ぐ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'しすぎる', 'suffixOut': 'す', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ちすぎる', 'suffixOut': 'つ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'にすぎる', 'suffixOut': 'ぬ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'びすぎる', 'suffixOut': 'ぶ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'みすぎる', 'suffixOut': 'む', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'りすぎる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じすぎる', 'suffixOut': 'ずる', 'conditionsIn': ['v1'], 'conditionsOut': ['vz']},
                {'suffixIn': 'しすぎる', 'suffixOut': 'する', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': '為すぎる', 'suffixOut': '為る', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': 'きすぎる', 'suffixOut': 'くる', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '来すぎる', 'suffixOut': '来る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '來すぎる', 'suffixOut': '來る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-tai',
            'rules': [
                {'suffixIn': 'たい', 'suffixOut': 'る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v1']},
                {'suffixIn': 'いたい', 'suffixOut': 'う', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'きたい', 'suffixOut': 'く', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぎたい', 'suffixOut': 'ぐ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'したい', 'suffixOut': 'す', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ちたい', 'suffixOut': 'つ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'にたい', 'suffixOut': 'ぬ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'びたい', 'suffixOut': 'ぶ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'みたい', 'suffixOut': 'む', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'りたい', 'suffixOut': 'る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じたい', 'suffixOut': 'ずる', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vz']},
                {'suffixIn': 'したい', 'suffixOut': 'する', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vs']},
                {'suffixIn': '為たい', 'suffixOut': '為る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vs']},
                {'suffixIn': 'きたい', 'suffixOut': 'くる', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vk']},
                {'suffixIn': '来たい', 'suffixOut': '来る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vk']},
                {'suffixIn': '來たい', 'suffixOut': '來る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-tara',
            'rules': [
                {'suffixIn': 'かったら', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'たら', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'いたら', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'いだら', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'したら', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ったら', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ったら', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ったら', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだら', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだら', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだら', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'じたら', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'したら', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為たら', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'きたら', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来たら', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來たら', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': 'いったら', 'suffixOut': 'いく', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'おうたら', 'suffixOut': 'おう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'こうたら', 'suffixOut': 'こう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'そうたら', 'suffixOut': 'そう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'とうたら', 'suffixOut': 'とう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '行ったら', 'suffixOut': '行く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '逝ったら', 'suffixOut': '逝く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '往ったら', 'suffixOut': '往く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '請うたら', 'suffixOut': '請う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '乞うたら', 'suffixOut': '乞う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '恋うたら', 'suffixOut': '恋う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '問うたら', 'suffixOut': '問う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '負うたら', 'suffixOut': '負う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '沿うたら', 'suffixOut': '沿う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '添うたら', 'suffixOut': '添う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '副うたら', 'suffixOut': '副う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '厭うたら', 'suffixOut': '厭う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'のたもうたら', 'suffixOut': 'のたまう', 'conditionsIn': [], 'conditionsOut': ['v5']}
            ]
        },
        {
            'name': '-tari',
            'rules': [
                {'suffixIn': 'かったり', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'たり', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'いたり', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'いだり', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'したり', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ったり', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ったり', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ったり', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだり', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだり', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだり', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'じたり', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'したり', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為たり', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'きたり', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来たり', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來たり', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': 'いったり', 'suffixOut': 'いく', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'おうたり', 'suffixOut': 'おう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'こうたり', 'suffixOut': 'こう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'そうたり', 'suffixOut': 'そう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'とうたり', 'suffixOut': 'とう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '行ったり', 'suffixOut': '行く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '逝ったり', 'suffixOut': '逝く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '往ったり', 'suffixOut': '往く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '請うたり', 'suffixOut': '請う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '乞うたり', 'suffixOut': '乞う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '恋うたり', 'suffixOut': '恋う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '問うたり', 'suffixOut': '問う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '負うたり', 'suffixOut': '負う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '沿うたり', 'suffixOut': '沿う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '添うたり', 'suffixOut': '添う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '副うたり', 'suffixOut': '副う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '厭うたり', 'suffixOut': '厭う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'のたもうたり', 'suffixOut': 'のたまう', 'conditionsIn': [], 'conditionsOut': ['v5']}
            ]
        },
        {
            'name': '-te',
            'rules': [
                {'suffixIn': 'くて', 'suffixOut': 'い', 'conditionsIn': ['iru'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'て', 'suffixOut': 'る', 'conditionsIn': ['iru'], 'conditionsOut': ['v1']},
                {'suffixIn': 'いて', 'suffixOut': 'く', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'いで', 'suffixOut': 'ぐ', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'して', 'suffixOut': 'す', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'って', 'suffixOut': 'う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'って', 'suffixOut': 'つ', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'って', 'suffixOut': 'る', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んで', 'suffixOut': 'ぬ', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んで', 'suffixOut': 'ぶ', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んで', 'suffixOut': 'む', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じて', 'suffixOut': 'ずる', 'conditionsIn': ['iru'], 'conditionsOut': ['vz']},
                {'suffixIn': 'して', 'suffixOut': 'する', 'conditionsIn': ['iru'], 'conditionsOut': ['vs']},
                {'suffixIn': '為て', 'suffixOut': '為る', 'conditionsIn': ['iru'], 'conditionsOut': ['vs']},
                {'suffixIn': 'きて', 'suffixOut': 'くる', 'conditionsIn': ['iru'], 'conditionsOut': ['vk']},
                {'suffixIn': '来て', 'suffixOut': '来る', 'conditionsIn': ['iru'], 'conditionsOut': ['vk']},
                {'suffixIn': '來て', 'suffixOut': '來る', 'conditionsIn': ['iru'], 'conditionsOut': ['vk']},
                {'suffixIn': 'いって', 'suffixOut': 'いく', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'おうて', 'suffixOut': 'おう', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'こうて', 'suffixOut': 'こう', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'そうて', 'suffixOut': 'そう', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'とうて', 'suffixOut': 'とう', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '行って', 'suffixOut': '行く', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '逝って', 'suffixOut': '逝く', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '往って', 'suffixOut': '往く', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '請うて', 'suffixOut': '請う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '乞うて', 'suffixOut': '乞う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '恋うて', 'suffixOut': '恋う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '問うて', 'suffixOut': '問う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '負うて', 'suffixOut': '負う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '沿うて', 'suffixOut': '沿う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '添うて', 'suffixOut': '添う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '副うて', 'suffixOut': '副う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': '厭うて', 'suffixOut': '厭う', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'のたもうて', 'suffixOut': 'のたまう', 'conditionsIn': ['iru'], 'conditionsOut': ['v5']},
                {'suffixIn': 'まして', 'suffixOut': 'ます', 'conditionsIn': [], 'conditionsOut': ['v']}
            ]
        },
        {
            'name': '-zu',
            'rules': [
                {'suffixIn': 'ず', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'かず', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'がず', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'さず', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'たず', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'なず', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばず', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'まず', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'らず', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'わず', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぜず', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'せず', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為ず', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'こず', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来ず', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來ず', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-nu',
            'rules': [
                {'suffixIn': 'ぬ', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'かぬ', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'がぬ', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'さぬ', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'たぬ', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'なぬ', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばぬ', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'まぬ', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'らぬ', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'わぬ', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぜぬ', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'せぬ', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為ぬ', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'こぬ', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来ぬ', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來ぬ', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-mu',
            'rules': [
                {'suffixIn': 'む', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'かむ', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'がむ', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'さむ', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'たむ', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'なむ', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばむ', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'まむ', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'らむ', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'わむ', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぜむ', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'せむ', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為む', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'こむ', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来む', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來む', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-zaru',
            'rules': [
                {'suffixIn': 'ざる', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'かざる', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'がざる', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'さざる', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'たざる', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'なざる', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばざる', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'まざる', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'らざる', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'わざる', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぜざる', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'せざる', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為ざる', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'こざる', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来ざる', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來ざる', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': '-neba',
            'rules': [
                {'suffixIn': 'ねば', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'かねば', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'がねば', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'さねば', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'たねば', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'なねば', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばねば', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'まねば', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'らねば', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'わねば', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぜねば', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'せねば', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為ねば', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'こねば', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来ねば', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來ねば', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'adv',
            'rules': [
                {'suffixIn': 'く', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': 'causative',
            'rules': [
                {'suffixIn': 'させる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v1']},
                {'suffixIn': 'かせる', 'suffixOut': 'く', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'がせる', 'suffixOut': 'ぐ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'させる', 'suffixOut': 'す', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'たせる', 'suffixOut': 'つ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'なせる', 'suffixOut': 'ぬ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばせる', 'suffixOut': 'ぶ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ませる', 'suffixOut': 'む', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'らせる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'わせる', 'suffixOut': 'う', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じさせる', 'suffixOut': 'ずる', 'conditionsIn': ['v1'], 'conditionsOut': ['vz']},
                {'suffixIn': 'ぜさせる', 'suffixOut': 'ずる', 'conditionsIn': ['v1'], 'conditionsOut': ['vz']},
                {'suffixIn': 'させる', 'suffixOut': 'する', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': '為せる', 'suffixOut': '為る', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': 'せさせる', 'suffixOut': 'する', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': '為させる', 'suffixOut': '為る', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': 'こさせる', 'suffixOut': 'くる', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '来させる', 'suffixOut': '来る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '來させる', 'suffixOut': '來る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'imperative',
            'rules': [
                {'suffixIn': 'ろ', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'よ', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'え', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'け', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'げ', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'せ', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'て', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ね', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'べ', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'め', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'れ', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'じろ', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'ぜよ', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'しろ', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'せよ', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為ろ', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為よ', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'こい', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来い', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來い', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'imperative negative',
            'rules': [
                {'suffixIn': 'な', 'suffixOut': '', 'conditionsIn': [], 'conditionsOut': ['v']}
            ]
        },
        {
            'name': 'masu stem',
            'rules': [
                {'suffixIn': 'い', 'suffixOut': 'いる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'え', 'suffixOut': 'える', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'き', 'suffixOut': 'きる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'ぎ', 'suffixOut': 'ぎる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'け', 'suffixOut': 'ける', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'げ', 'suffixOut': 'げる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'じ', 'suffixOut': 'じる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'せ', 'suffixOut': 'せる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'ぜ', 'suffixOut': 'ぜる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'ち', 'suffixOut': 'ちる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'て', 'suffixOut': 'てる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'で', 'suffixOut': 'でる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'に', 'suffixOut': 'にる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'ね', 'suffixOut': 'ねる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'ひ', 'suffixOut': 'ひる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'び', 'suffixOut': 'びる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'へ', 'suffixOut': 'へる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'べ', 'suffixOut': 'べる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'み', 'suffixOut': 'みる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'め', 'suffixOut': 'める', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'り', 'suffixOut': 'りる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'れ', 'suffixOut': 'れる', 'conditionsIn': [], 'conditionsOut': ['v1d']},
                {'suffixIn': 'い', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'き', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぎ', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'し', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ち', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'に', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'び', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'み', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'り', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'き', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'negative',
            'rules': [
                {'suffixIn': 'くない', 'suffixOut': 'い', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ない', 'suffixOut': 'る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v1']},
                {'suffixIn': 'かない', 'suffixOut': 'く', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'がない', 'suffixOut': 'ぐ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'さない', 'suffixOut': 'す', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'たない', 'suffixOut': 'つ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'なない', 'suffixOut': 'ぬ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばない', 'suffixOut': 'ぶ', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'まない', 'suffixOut': 'む', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'らない', 'suffixOut': 'る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'わない', 'suffixOut': 'う', 'conditionsIn': ['adj-i'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じない', 'suffixOut': 'ずる', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vz']},
                {'suffixIn': 'しない', 'suffixOut': 'する', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vs']},
                {'suffixIn': '為ない', 'suffixOut': '為る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vs']},
                {'suffixIn': 'こない', 'suffixOut': 'くる', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vk']},
                {'suffixIn': '来ない', 'suffixOut': '来る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vk']},
                {'suffixIn': '來ない', 'suffixOut': '來る', 'conditionsIn': ['adj-i'], 'conditionsOut': ['vk']},
                {'suffixIn': 'ません', 'suffixOut': 'ます', 'conditionsIn': ['v'], 'conditionsOut': ['v']}
            ]
        },
        {
            'name': 'noun',
            'rules': [
                {'suffixIn': 'さ', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': 'passive',
            'rules': [
                {'suffixIn': 'かれる', 'suffixOut': 'く', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'がれる', 'suffixOut': 'ぐ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'される', 'suffixOut': 'す', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'たれる', 'suffixOut': 'つ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'なれる', 'suffixOut': 'ぬ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばれる', 'suffixOut': 'ぶ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'まれる', 'suffixOut': 'む', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'われる', 'suffixOut': 'う', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'られる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じされる', 'suffixOut': 'ずる', 'conditionsIn': ['v1'], 'conditionsOut': ['vz']},
                {'suffixIn': 'ぜされる', 'suffixOut': 'ずる', 'conditionsIn': ['v1'], 'conditionsOut': ['vz']},
                {'suffixIn': 'される', 'suffixOut': 'する', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': '為れる', 'suffixOut': '為る', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': 'こられる', 'suffixOut': 'くる', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '来られる', 'suffixOut': '来る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '來られる', 'suffixOut': '來る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'past',
            'rules': [
                {'suffixIn': 'かった', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'た', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'いた', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'いだ', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'した', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'った', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'った', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'った', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだ', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだ', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'んだ', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'じた', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'した', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為た', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'きた', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来た', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來た', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': 'いった', 'suffixOut': 'いく', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'おうた', 'suffixOut': 'おう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'こうた', 'suffixOut': 'こう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'そうた', 'suffixOut': 'そう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'とうた', 'suffixOut': 'とう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '行った', 'suffixOut': '行く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '逝った', 'suffixOut': '逝く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '往った', 'suffixOut': '往く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '請うた', 'suffixOut': '請う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '乞うた', 'suffixOut': '乞う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '恋うた', 'suffixOut': '恋う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '問うた', 'suffixOut': '問う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '負うた', 'suffixOut': '負う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '沿うた', 'suffixOut': '沿う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '添うた', 'suffixOut': '添う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '副うた', 'suffixOut': '副う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': '厭うた', 'suffixOut': '厭う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'のたもうた', 'suffixOut': 'のたまう', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ました', 'suffixOut': 'ます', 'conditionsIn': [], 'conditionsOut': ['v']},
                {'suffixIn': 'ませんでした', 'suffixOut': 'ません', 'conditionsIn': [], 'conditionsOut': ['v']}
            ]
        },
        {
            'name': 'polite',
            'rules': [
                {'suffixIn': 'ます', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v1']},
                {'suffixIn': 'います', 'suffixOut': 'う', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'きます', 'suffixOut': 'く', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぎます', 'suffixOut': 'ぐ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'します', 'suffixOut': 'す', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ちます', 'suffixOut': 'つ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'にます', 'suffixOut': 'ぬ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'びます', 'suffixOut': 'ぶ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'みます', 'suffixOut': 'む', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ります', 'suffixOut': 'る', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じます', 'suffixOut': 'ずる', 'conditionsIn': ['vz'], 'conditionsOut': ['vz']},
                {'suffixIn': 'します', 'suffixOut': 'する', 'conditionsIn': ['vs'], 'conditionsOut': ['vs']},
                {'suffixIn': '為ます', 'suffixOut': '為る', 'conditionsIn': ['vs'], 'conditionsOut': ['vs']},
                {'suffixIn': 'きます', 'suffixOut': 'くる', 'conditionsIn': ['vk'], 'conditionsOut': ['vk']},
                {'suffixIn': '来ます', 'suffixOut': '来る', 'conditionsIn': ['vk'], 'conditionsOut': ['vk']},
                {'suffixIn': '來ます', 'suffixOut': '來る', 'conditionsIn': ['vk'], 'conditionsOut': ['vk']},
                {'suffixIn': 'くあります', 'suffixOut': 'い', 'conditionsIn': ['v'], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': 'potential',
            'rules': [
                {'suffixIn': 'れる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v1', 'v5']},
                {'suffixIn': 'える', 'suffixOut': 'う', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ける', 'suffixOut': 'く', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'げる', 'suffixOut': 'ぐ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'せる', 'suffixOut': 'す', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'てる', 'suffixOut': 'つ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ねる', 'suffixOut': 'ぬ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'べる', 'suffixOut': 'ぶ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'める', 'suffixOut': 'む', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'できる', 'suffixOut': 'する', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': '出来る', 'suffixOut': 'する', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': 'これる', 'suffixOut': 'くる', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '来れる', 'suffixOut': '来る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '來れる', 'suffixOut': '來る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'potential or passive',
            'rules': [
                {'suffixIn': 'られる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v1']},
                {'suffixIn': 'ざれる', 'suffixOut': 'ずる', 'conditionsIn': ['v1'], 'conditionsOut': ['vz']},
                {'suffixIn': 'ぜられる', 'suffixOut': 'ずる', 'conditionsIn': ['v1'], 'conditionsOut': ['vz']},
                {'suffixIn': 'せられる', 'suffixOut': 'する', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': '為られる', 'suffixOut': '為る', 'conditionsIn': ['v1'], 'conditionsOut': ['vs']},
                {'suffixIn': 'こられる', 'suffixOut': 'くる', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '来られる', 'suffixOut': '来る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']},
                {'suffixIn': '來られる', 'suffixOut': '來る', 'conditionsIn': ['v1'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'volitional',
            'rules': [
                {'suffixIn': 'よう', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v1']},
                {'suffixIn': 'おう', 'suffixOut': 'う', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'こう', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ごう', 'suffixOut': 'ぐ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'そう', 'suffixOut': 'す', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'とう', 'suffixOut': 'つ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'のう', 'suffixOut': 'ぬ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ぼう', 'suffixOut': 'ぶ', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'もう', 'suffixOut': 'む', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'ろう', 'suffixOut': 'る', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'じよう', 'suffixOut': 'ずる', 'conditionsIn': [], 'conditionsOut': ['vz']},
                {'suffixIn': 'しよう', 'suffixOut': 'する', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': '為よう', 'suffixOut': '為る', 'conditionsIn': [], 'conditionsOut': ['vs']},
                {'suffixIn': 'こよう', 'suffixOut': 'くる', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '来よう', 'suffixOut': '来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': '來よう', 'suffixOut': '來る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': 'ましょう', 'suffixOut': 'ます', 'conditionsIn': [], 'conditionsOut': ['v']}
            ]
        },
        {
            'name': 'causative passive',
            'rules': [
                {'suffixIn': 'かされる', 'suffixOut': 'く', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'がされる', 'suffixOut': 'ぐ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'たされる', 'suffixOut': 'つ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'なされる', 'suffixOut': 'ぬ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'ばされる', 'suffixOut': 'ぶ', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'まされる', 'suffixOut': 'む', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'らされる', 'suffixOut': 'る', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']},
                {'suffixIn': 'わされる', 'suffixOut': 'う', 'conditionsIn': ['v1'], 'conditionsOut': ['v5']}
            ]
        },
        {
            'name': '-toku',
            'rules': [
                {'suffixIn': 'とく', 'suffixOut': 'る', 'conditionsIn': ['v5'], 'conditionsOut': ['v1']},
                {'suffixIn': 'いとく', 'suffixOut': 'く', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'いどく', 'suffixOut': 'ぐ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'しとく', 'suffixOut': 'す', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っとく', 'suffixOut': 'う', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っとく', 'suffixOut': 'つ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'っとく', 'suffixOut': 'る', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んどく', 'suffixOut': 'ぬ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んどく', 'suffixOut': 'ぶ', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'んどく', 'suffixOut': 'む', 'conditionsIn': ['v5'], 'conditionsOut': ['v5']},
                {'suffixIn': 'じとく', 'suffixOut': 'ずる', 'conditionsIn': ['v5'], 'conditionsOut': ['vz']},
                {'suffixIn': 'しとく', 'suffixOut': 'する', 'conditionsIn': ['v5'], 'conditionsOut': ['vs']},
                {'suffixIn': '為とく', 'suffixOut': '為る', 'conditionsIn': ['v5'], 'conditionsOut': ['vs']},
                {'suffixIn': 'きとく', 'suffixOut': 'くる', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']},
                {'suffixIn': '来とく', 'suffixOut': '来る', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']},
                {'suffixIn': '來とく', 'suffixOut': '來る', 'conditionsIn': ['v5'], 'conditionsOut': ['vk']}
            ]
        },
        {
            'name': 'progressive or perfect',
            'rules': [
                {'suffixIn': 'ている', 'suffixOut': 'て', 'conditionsIn': ['v1'], 'conditionsOut': ['iru']},
                {'suffixIn': 'ておる', 'suffixOut': 'て', 'conditionsIn': ['v5'], 'conditionsOut': ['iru']},
                {'suffixIn': 'てる', 'suffixOut': 'て', 'conditionsIn': ['v1p'], 'conditionsOut': ['iru']},
                {'suffixIn': 'でいる', 'suffixOut': 'で', 'conditionsIn': ['v1'], 'conditionsOut': ['iru']},
                {'suffixIn': 'でおる', 'suffixOut': 'で', 'conditionsIn': ['v5'], 'conditionsOut': ['iru']},
                {'suffixIn': 'でる', 'suffixOut': 'で', 'conditionsIn': ['v1p'], 'conditionsOut': ['iru']},
                {'suffixIn': 'とる', 'suffixOut': 'て', 'conditionsIn': ['v5'], 'conditionsOut': ['iru']},
                {'suffixIn': 'ないでいる', 'suffixOut': 'ない', 'conditionsIn': ['v1'], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': '-ki',
            'rules': [
                {'suffixIn': 'き', 'suffixOut': 'い', 'conditionsIn': [], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': '-ge',
            'rules': [
                {'suffixIn': 'しげ', 'suffixOut': 'しい', 'conditionsIn': [], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': '-e',
            'rules': [
                {'suffixIn': 'ねえ', 'suffixOut': 'ない', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'めえ', 'suffixOut': 'むい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'みい', 'suffixOut': 'むい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ちぇえ', 'suffixOut': 'つい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ちい', 'suffixOut': 'つい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'せえ', 'suffixOut': 'すい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ええ', 'suffixOut': 'いい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ええ', 'suffixOut': 'わい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ええ', 'suffixOut': 'よい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'いぇえ', 'suffixOut': 'よい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'うぇえ', 'suffixOut': 'わい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'けえ', 'suffixOut': 'かい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'げえ', 'suffixOut': 'がい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'げえ', 'suffixOut': 'ごい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'せえ', 'suffixOut': 'さい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'めえ', 'suffixOut': 'まい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ぜえ', 'suffixOut': 'ずい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'っぜえ', 'suffixOut': 'ずい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'れえ', 'suffixOut': 'らい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'れえ', 'suffixOut': 'らい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ちぇえ', 'suffixOut': 'ちゃい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'でえ', 'suffixOut': 'どい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'れえ', 'suffixOut': 'れい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'べえ', 'suffixOut': 'ばい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'てえ', 'suffixOut': 'たい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ねぇ', 'suffixOut': 'ない', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'めぇ', 'suffixOut': 'むい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'みぃ', 'suffixOut': 'むい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ちぃ', 'suffixOut': 'つい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'せぇ', 'suffixOut': 'すい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'けぇ', 'suffixOut': 'かい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'げぇ', 'suffixOut': 'がい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'げぇ', 'suffixOut': 'ごい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'せぇ', 'suffixOut': 'さい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'めぇ', 'suffixOut': 'まい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ぜぇ', 'suffixOut': 'ずい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'っぜぇ', 'suffixOut': 'ずい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'れぇ', 'suffixOut': 'らい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'でぇ', 'suffixOut': 'どい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'れぇ', 'suffixOut': 'れい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'べぇ', 'suffixOut': 'ばい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'てぇ', 'suffixOut': 'たい', 'conditionsIn': [], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': 'slang',
            'rules': [
                {'suffixIn': 'てぇてぇ', 'suffixOut': 'とうとい', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'てぇてぇ', 'suffixOut': '尊い', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'おなしゃす', 'suffixOut': 'おねがいします', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'おなしゃす', 'suffixOut': 'お願いします', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'あざす', 'suffixOut': 'ありがとうございます', 'conditionsIn': [], 'conditionsOut': ['v5']},
                {'suffixIn': 'さーせん', 'suffixOut': 'すみません', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': '神ってる', 'suffixOut': '神がかっている', 'conditionsIn': [], 'conditionsOut': ['v1p']},
                {'suffixIn': 'じわる', 'suffixOut': 'じわじわ来る', 'conditionsIn': [], 'conditionsOut': ['vk']},
                {'suffixIn': 'おさしみ', 'suffixOut': 'おやすみ', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'おやさい', 'suffixOut': 'おやすみ', 'conditionsIn': [], 'conditionsOut': []}
            ]
        },
        {
            'name': 'kansai-ben',
            'description': 'Negative form of kansai-ben verbs',
            'rules': [
                {'suffixIn': 'へん', 'suffixOut': 'ない', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ひん', 'suffixOut': 'ない', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'せえへん', 'suffixOut': 'しない', 'conditionsIn': [], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'へんかった', 'suffixOut': 'なかった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ひんかった', 'suffixOut': 'なかった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'うてへん', 'suffixOut': 'ってない', 'conditionsIn': [], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': 'kansai-ben',
            'description': '-ku stem of kansai-ben adjectives',
            'rules': [
                {'suffixIn': 'う', 'suffixOut': 'く', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'こう', 'suffixOut': 'かく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ごう', 'suffixOut': 'がく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'そう', 'suffixOut': 'さく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'とう', 'suffixOut': 'たく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'のう', 'suffixOut': 'なく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぼう', 'suffixOut': 'ばく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'もう', 'suffixOut': 'まく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ろう', 'suffixOut': 'らく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'よう', 'suffixOut': 'よく', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'しゅう', 'suffixOut': 'しく', 'conditionsIn': [], 'conditionsOut': []}
            ]
        },
        {
            'name': 'kansai-ben',
            'description': '-te form of kansai-ben adjectives',
            'rules': [
                {'suffixIn': 'うて', 'suffixOut': 'くて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'こうて', 'suffixOut': 'かくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ごうて', 'suffixOut': 'がくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'そうて', 'suffixOut': 'さくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'とうて', 'suffixOut': 'たくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'のうて', 'suffixOut': 'なくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぼうて', 'suffixOut': 'ばくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'もうて', 'suffixOut': 'まくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ろうて', 'suffixOut': 'らくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ようて', 'suffixOut': 'よくて', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'しゅうて', 'suffixOut': 'しくて', 'conditionsIn': [], 'conditionsOut': []}
            ]
        },
        {
            'name': 'kansai-ben',
            'description': 'Negative form of kansai-ben adjectives',
            'rules': [
                {'suffixIn': 'うない', 'suffixOut': 'くない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'こうない', 'suffixOut': 'かくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ごうない', 'suffixOut': 'がくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'そうない', 'suffixOut': 'さくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'とうない', 'suffixOut': 'たくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'のうない', 'suffixOut': 'なくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ぼうない', 'suffixOut': 'ばくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'もうない', 'suffixOut': 'まくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ろうない', 'suffixOut': 'らくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'ようない', 'suffixOut': 'よくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']},
                {'suffixIn': 'しゅうない', 'suffixOut': 'しくない', 'conditionsIn': ['adj-i'], 'conditionsOut': ['adj-i']}
            ]
        },
        {
            'name': 'kansai-ben',
            'description': '-te form of kansai-ben verbs',
            'rules': [
                {'suffixIn': 'うて', 'suffixOut': 'って', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'おうて', 'suffixOut': 'あって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'こうて', 'suffixOut': 'かって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ごうて', 'suffixOut': 'がって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'そうて', 'suffixOut': 'さって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぞうて', 'suffixOut': 'ざって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'とうて', 'suffixOut': 'たって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'どうて', 'suffixOut': 'だって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'のうて', 'suffixOut': 'なって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ほうて', 'suffixOut': 'はって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぼうて', 'suffixOut': 'ばって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'もうて', 'suffixOut': 'まって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ろうて', 'suffixOut': 'らって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ようて', 'suffixOut': 'やって', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ゆうて', 'suffixOut': 'いって', 'conditionsIn': [], 'conditionsOut': []}
            ]
        },
        {
            'name': 'kansai-ben',
            'description': 'past form of kansai-ben terms',
            'rules': [
                {'suffixIn': 'うた', 'suffixOut': 'った', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'おうた', 'suffixOut': 'あった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'こうた', 'suffixOut': 'かった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ごうた', 'suffixOut': 'がった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'そうた', 'suffixOut': 'さった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぞうた', 'suffixOut': 'ざった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'とうた', 'suffixOut': 'たった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'どうた', 'suffixOut': 'だった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'のうた', 'suffixOut': 'なった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ほうた', 'suffixOut': 'はった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぼうた', 'suffixOut': 'ばった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'もうた', 'suffixOut': 'まった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ろうた', 'suffixOut': 'らった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ようた', 'suffixOut': 'やった', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ゆうた', 'suffixOut': 'いった', 'conditionsIn': [], 'conditionsOut': []}
            ]
        },
        {
            'name': 'kansai-ben',
            'description': '-tara form of kansai-ben terms',
            'rules': [
                {'suffixIn': 'うたら', 'suffixOut': 'ったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'おうたら', 'suffixOut': 'あったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'こうたら', 'suffixOut': 'かったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ごうたら', 'suffixOut': 'がったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'そうたら', 'suffixOut': 'さったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぞうたら', 'suffixOut': 'ざったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'とうたら', 'suffixOut': 'たったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'どうたら', 'suffixOut': 'だったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'のうたら', 'suffixOut': 'なったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ほうたら', 'suffixOut': 'はったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ぼうたら', 'suffixOut': 'ばったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'もうたら', 'suffixOut': 'まったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ろうたら', 'suffixOut': 'らったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ようたら', 'suffixOut': 'やったら', 'conditionsIn': [], 'conditionsOut': []},
                {'suffixIn': 'ゆうたら', 'suffixOut': 'いったら', 'conditionsIn': [], 'conditionsOut': []}
            ]
        }
    ]
};

