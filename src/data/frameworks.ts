import * as FrameworkIcons from 'assets/frameworks';
import { Miner } from 'data/miner';
import { MinerWeapon } from 'data/weapons';

export const Frameworks = [
  'Custom Engineered',
  'Fourth Relic',
  'Glyphid Trophy Hunter',
  'Mechanized',
  'Neonband',
  'Scale Brigade',
  'Waster',
  "Builder's Choice",
  'MilSpec',
] as const;

export type Framework = typeof Frameworks[number];

export const FrameworkIcon: Record<Framework, ImgSrc> = {
  'Custom Engineered': FrameworkIcons.CustomEngineered,
  'Fourth Relic': FrameworkIcons.FourthRelic,
  'Glyphid Trophy Hunter': FrameworkIcons.GlyphidTrophyHunter,
  Mechanized: FrameworkIcons.Mechanized,
  Neonband: FrameworkIcons.NeonBand,
  'Scale Brigade': FrameworkIcons.ScaleBrigade,
  Waster: FrameworkIcons.Waster,
  "Builder's Choice": FrameworkIcons.BuildersChoice,
  MilSpec: FrameworkIcons.MilSpec,
};

export const FrameworkIDs: Record<
  MinerWeapon<Miner>,
  Record<Framework, string>
> = {
  // Driller
  'CRSPR Flamethrower': {
    'Custom Engineered': 'BBBC1151F03BFA4A8F7722DC5879E026',
    'Fourth Relic': '5B26DC66CA5D1E4CAC9B118E992E0BBF',
    'Glyphid Trophy Hunter': 'EA9A09B0C309114F9DD0001D75127CDC',
    Mechanized: 'E21E3A50AF1C5C4D94736D86720EDB88',
    Neonband: '57BB52F98693E54D99B73CDE9B712ADC',
    'Scale Brigade': 'AC883F9601B1B1429EB5E2C5209080BF',
    Waster: 'ACFA6C9793BD4442B24DECBA903E1E3B',
    "Builder's Choice": 'F4251323A1D6124EBB7BB2B7B72AEF49',
    MilSpec: 'B16AF562D648CD40A0D5D145962E365D',
  },
  'Cryo Cannon': {
    'Custom Engineered': '2A1FC1AF2AC7BB4B82DC642CF1613D67',
    'Fourth Relic': 'D1FCDD2A7A5D9E48A97DDA1D74304D2B',
    'Glyphid Trophy Hunter': 'FCF7DB15D8F449479F01C6BD37A512A2',
    Mechanized: '3FAFCB5459A7BF48BB302F8AC833AC6C',
    Neonband: '46E0220E293BC34B9D3364B5E006D42C',
    'Scale Brigade': '92C621112E2D4945BBC6F93A64F4C6C8',
    Waster: '57A85594307158488F5BD2EF4C28E21F',
    "Builder's Choice": '7F1905638BBB59459C6F97F07D959F12',
    MilSpec: 'C7A1ADFE9C2AE245A78F660458CCC9CE',
  },
  'Corrosive Sludge Pump': {
    'Custom Engineered': '629E7AB3AE2B2C4D9C100F99243B69E2',
    'Fourth Relic': '5BF554F74274D347B3A66A94DA7299FC',
    'Glyphid Trophy Hunter': '74AA81685514B24EBD71F03D5066AFC6',
    Mechanized: '4270E23BC505704EA4C2DC308B6926E4',
    Neonband: 'BDB0C7CBAF71B24398AE9D4AFD5749E7',
    'Scale Brigade': '4FE5D2656ECC4E4FBEAC744855A8EA70',
    Waster: '7C96608FD0700D4F9EB1CC25766A8533',
    "Builder's Choice": '4E6706F7B90584499B623B083B6B8E9A',
    MilSpec: 'D2951B5C4997E243A4FE517077E21647',
  },
  'Subata 120': {
    'Custom Engineered': '04EBE2E6AC0B97488B67307E63F7CB5A',
    'Fourth Relic': '339FEB90490AD44CB0D383EA6E1F10B1',
    'Glyphid Trophy Hunter': 'D9135868FF4B21409E3ABE9D47032B82',
    Mechanized: '44528AF9333D4748B69FD7B3BF96E82F',
    Neonband: 'D564D9A2F5E55D43BAF522106E744E24',
    'Scale Brigade': '48889CAF94F90C468BDDB5E5A167E8E6',
    Waster: 'B786D106242B5F469F9C8CF7D9DD7855',
    "Builder's Choice": 'F87BE8801926234BBACE23CB3A7EE3AE',
    MilSpec: '266240A60964A3469EE9DE623EA48D9E',
  },
  'Experimental Plasma Charger': {
    'Custom Engineered': 'EE480DDC1244BD44877088FF4644D7E6',
    'Fourth Relic': 'F73F5589741A4941ADEA507F8BF6A593',
    'Glyphid Trophy Hunter': '6982E87B191D994C9476CAC2908A896B',
    Mechanized: '9919EAEAABDFC54AA1CFCCDFF6E87B5F',
    Neonband: '878D8711CB1F1B41B395248E0276D850',
    'Scale Brigade': '1E901E972CF2BC4DA9D0E0D6353B992C',
    Waster: '5DEB0A96482A7940A6D0FF94073E2A1B',
    "Builder's Choice": '0A96495F9C054A4882D332FE9641FA66',
    MilSpec: '57C677BC9411D04DBFF46A13F187F2AC',
  },
  'Colette Wave Cooker': {
    'Custom Engineered': '2204B4E59A3742479C95F3366A8499BD',
    'Fourth Relic': '132360BE9199504E888BFAE7B23FC6FB',
    'Glyphid Trophy Hunter': '6745861B0759FB4297E56090023A0350',
    Mechanized: '471E9B62C52B4243ACECDC6F24DD9D7D',
    Neonband: '0FA33FCAED92AD4EAFD8C47E1F076D86',
    'Scale Brigade': '294898A78E8E7B459B1E38402320E687',
    Waster: 'C4FF5849DDA9BE4C950DBB3BA49E73B5',
    "Builder's Choice": 'A73428B8D8D1374AB1AF3D619390A387',
    MilSpec: 'E884811E4B64714DB2DE57EC29EF5298',
  },

  // Engineer
  '"Warthog" Auto 210': {
    'Custom Engineered': '8D679463F9153A4FA2593492D0C819A4',
    'Fourth Relic': 'ABF635EBFE2CB44796CDF979EB2208BC',
    'Glyphid Trophy Hunter': '67E1B71D8131B341A86DE41AFCC28153',
    Mechanized: '7BA483ADD0C5AD438D3DDE088DE42E5B',
    Neonband: 'CCF1DA53129E8848A071896B57BD0E3F',
    'Scale Brigade': '231632BCB5910A4F94FFBCCFF0434232',
    Waster: '1FC51ADAC03ADE438C3208702B8B60CD',
    "Builder's Choice": 'DC73EF2B2F1E2342A4F30AB55D484C22',
    MilSpec: 'F368A4F49C401E45A83AE00718B4E8F3',
  },
  '"Stubby" Voltaic SMG': {
    'Custom Engineered': 'AA94530A9AA69B4184C8C006DE67FC17',
    'Fourth Relic': '349BFBED822E864CA1D8E50F50FFEBFE',
    'Glyphid Trophy Hunter': '4B1446208DCD824099DAECC6960414EF',
    Mechanized: '6460F3804380CD419FA5A075C9443C93',
    Neonband: '452ECFF8CE9F0B4688BF32A39B93E8F5',
    'Scale Brigade': 'FB15FF69ACD72C4C8F24EBA1380A5F9E',
    Waster: 'A09EDDE01D939443BBFF217C646DFC93',
    "Builder's Choice": '6A1C8A6036346B48889DF8BB3E5A1FB2',
    MilSpec: 'AF3F4B81F221D14F8873E48AC35095C9',
  },
  'Lok-1 Smart Rifle': {
    'Custom Engineered': '4C0E4D6119F2D143AF07F88CE7613049',
    'Fourth Relic': '2CA4DF81186E794981F5F22BBAC62ABD',
    'Glyphid Trophy Hunter': '253D3E222CF92F44B5513A7ED0F24ECF',
    Mechanized: 'BDEB779495877240BCF36DE0B5405571',
    Neonband: '696B78A9EDA588409F6123E44815BAFB',
    'Scale Brigade': 'B5A3F915F554B940883A26520AFE5279',
    Waster: '18AF674EA15EDC4BBD06B657F1D71E28',
    "Builder's Choice": '6EA56EDD2661A7458FBD327769921623',
    MilSpec: '859F271DD8367E4DB2F24229D4EBB89E',
  },
  'Deepcore 40mm PGL': {
    'Custom Engineered': '44C16DFD4FD8A44FAAE0660320381ECD',
    'Fourth Relic': 'C10759E8DCD47D40BC1CE444C1F0E3FA',
    'Glyphid Trophy Hunter': 'A17016EC36C6C74883A566D841E50453',
    Mechanized: '304358AEAE5F3346958D796BA45B5604',
    Neonband: 'AFBF4769E8FC55468F61309D00021119',
    'Scale Brigade': '697265879E54B84DA15EA4E518CF4296',
    Waster: '1CEF96DBFBF92C48AF55D9709CC7A855',
    "Builder's Choice": '6BB24FF5342DA8439A35F9F987B2BC33',
    MilSpec: '98EFC1EA16D17349979F4233510F4AC4',
  },
  'Breach Cutter': {
    'Custom Engineered': 'F9AA72F6F9A62E49A9431C203BAA0F26',
    'Fourth Relic': '74D926D36162EB46BD04A5DDDF28C2FC',
    'Glyphid Trophy Hunter': '797A77FFD7105242A609F6740A0E684E',
    Mechanized: '779BE9A55F960945A406D389AD4030FE',
    Neonband: 'A989EB6D58EFE54494E471BB61E535C8',
    'Scale Brigade': 'FEF1A8A6925F984BA2136D81B0085067',
    Waster: '337A808B11FDDE40B59D2094F9C71F12',
    "Builder's Choice": 'DCEE242F8BD2B64D83EE6FF1253D6047',
    MilSpec: 'BFBBBD800898804DA210A4B9499F840A',
  },
  'Shard Diffractor': {
    'Custom Engineered': '39C75B34D9D6884EACBB2A0A20620194',
    'Fourth Relic': 'E15E4CE23FD7A84E935295081DD8A627',
    'Glyphid Trophy Hunter': 'CCB15E211F1266439920600A8F009583',
    Mechanized: 'C4E4D10B8944614AA104E6197F5EFC70',
    Neonband: 'EABE767BEEF2CD45A4BD9B33B841D42E',
    'Scale Brigade': 'D1BC37E1512D67418A22765F2A8B15EB',
    Waster: 'A3DFB06533AC354C81AD8946D5AFE4F2',
    "Builder's Choice": 'D1F726BE92725442940E2F83CE217F37',
    MilSpec: 'A0B86E89D2C56C40834FA6768F705138',
  },

  // Gunner
  '"Lead Storm" Powered Minigun': {
    'Custom Engineered': '8BF49946B47A524DA518320260C1058D',
    'Fourth Relic': 'E4E21C728EC3F14B9BD5DD09922BE71A',
    'Glyphid Trophy Hunter': 'D2CC36806F502F44B48B793CA29BEB36',
    Mechanized: '88D7EA8C04A0134D92B0F8011EFD162E',
    Neonband: 'DFB7BC3D2B11834A9AF6BFF79A0A9563',
    'Scale Brigade': '70E67149240C5446ADECCC0B3B7ED10F',
    Waster: '7C072CB773A1A443AFBA0AEFB8D60854',
    "Builder's Choice": '23CF77EA5A44934697AADCE27FF4B6D6',
    MilSpec: '51B0E85C8861714BAB9CD4761CE3732E',
  },
  '"Thunderhead" Heavy Autocannon': {
    'Custom Engineered': '9F14F79558A8A045BD85E140E2AE32F4',
    'Fourth Relic': '0F48414B7B6FB64794D47F44FA4734D9',
    'Glyphid Trophy Hunter': '9E8A950319E70B429DED2FCB682889E8',
    Mechanized: '5E819C8FD67E85469FB4E7BAD5C4A21A',
    Neonband: '0FDB13F692F5004D99BF78E2FA909760',
    'Scale Brigade': '6370AA7A90FCCB4CBD3728CBADD34CC1',
    Waster: '4B50A30E9B864446A46E7F9ABE3B926D',
    "Builder's Choice": 'BAF2D02B54F5DF49B6A1D03C20654816',
    MilSpec: 'C1A56F07FB22B14680C865310B2A5440',
  },
  '"Hurricane" Guided Rocket System': {
    'Custom Engineered': '1A55B628C8743E46AC007D8FD534D84E',
    'Fourth Relic': '866A72F9F4D55C4EAFC5BE81655CA21A',
    'Glyphid Trophy Hunter': '6CD0D426E2B01B4AB096113ECB81CC48',
    Mechanized: 'B5535B682474B741BE6249EFBAB27C23',
    Neonband: 'E94BD81D70582949A480AA5F45239F45',
    'Scale Brigade': '394DB503DA01374FB736C68256092192',
    Waster: '74B7AFE3934BF7479AD56514733BA5CA',
    "Builder's Choice": 'BA47C155DF635A43B1971B9FFF1430B9',
    MilSpec: '85D6DCD09497514793B662BF1839B2FC',
  },
  '"Bulldog" Heavy Revolver': {
    'Custom Engineered': '81AC1795976B4247BAFC9DB6AEC37E49',
    'Fourth Relic': '0A3DA1FAEE768B46A1A6B327EBF92ACF',
    'Glyphid Trophy Hunter': '126E84C51BD1274F94EC81DEFD071EDD',
    Mechanized: '920BDAB74E41504E9EEF8F444AAF63F7',
    Neonband: 'CDD14084B8900F4C96EB01358B0631A6',
    'Scale Brigade': '31BAB869DA560A44A440493A97F05807',
    Waster: '5F6D7613B11A3041A959C0F2906BA7F6',
    "Builder's Choice": '6EC3AE62D68CFA42B03775A506E55885',
    MilSpec: 'E46271ED10452749A737629040746C30',
  },
  'BRT7 Burst Fire Gun': {
    'Custom Engineered': '35221568F37CBB4CB94FBB70C7693747',
    'Fourth Relic': '2E7700EBABE37E478FD88320E87ED5C5',
    'Glyphid Trophy Hunter': '0645D3A3FE33244294981110B9B1A4F5',
    Mechanized: '22936C02624E6D4EABD66848C8E09865',
    Neonband: '507DFD1792BC6A48840FA5A6C8230C17',
    'Scale Brigade': 'EF8C3C197E4A41429FACE5F9F91DD364',
    Waster: 'B786D106242B5F469F9C8CF7D9DD7855',
    "Builder's Choice": 'F87BE8801926234BBACE23CB3A7EE3AE',
    MilSpec: 'B3511338CA916C42B957F392851D15A2',
  },
  'ArmsKore Coil Gun': {
    'Custom Engineered': '1959E2F11C1D4F40A31322C6E18442A2',
    'Fourth Relic': '5C2BB6941BF5FF41856D71565CA1F1D6',
    'Glyphid Trophy Hunter': '5FA07F57DFBBBC418A9F0BA47A7DA3AA',
    Mechanized: 'F98B0BE1498AEF42B5ADE7890EC77270',
    Neonband: '6A1CADAC7AD48C489E6D645C50886689',
    'Scale Brigade': '0F48414B7B6FB64794D47F44FA4734D9',
    Waster: '50ED4FE1B2758A40AEBEC16F3D5E6A8B',
    "Builder's Choice": '9E11CFB50A64F24D8DB668A4E4C55EA5',
    MilSpec: 'FDC5A51473356642B99EA3687BC57ECF',
  },

  // Scout
  'Deepcore GK2': {
    'Custom Engineered': 'F8C90F0567362C48B1393FD849BDE128',
    'Fourth Relic': '323068C433008A4C9DBAE9BEAE98CEC8',
    'Glyphid Trophy Hunter': '693AD44151511142B57017A8A1DDF5EF',
    Mechanized: 'CB0673BC4C11AA4F93902B57C5831EC2',
    Neonband: '70B3454C8DFD794191C764418A4DDA85',
    'Scale Brigade': 'DA09B0F43E63074998C14783A8D5437E',
    Waster: 'D57042745DB824488EC7928A866963A1',
    "Builder's Choice": '76604F6753F99746ABEBBC5165B0D630',
    MilSpec: 'EB89321B14430348B9509B6F7A829810',
  },
  'M1000 Classic': {
    'Custom Engineered': 'FA21DBFC18FAEF4B908D91878AEF735C',
    'Fourth Relic': '47DC798F5C20EC45AFCEDC7FC7F4539B',
    'Glyphid Trophy Hunter': '6E4AE16F46A83043A047FAF33B20FA41',
    Mechanized: 'D1E6565E4E08854EA4E61DE77813B0CA',
    Neonband: 'D5B515BFE3D0264A9B9F2E2326F28A3E',
    'Scale Brigade': '72FB0FEB09A98D47A06D433ECEFEC097',
    Waster: 'ED783491BBFEEE46A9732AB62B0DCB32',
    "Builder's Choice": 'F8D2DFF1ED1F25468C785BE0015DC062',
    MilSpec: '3D8F596C1C7C274B8621BF7A736AA087',
  },
  'DRAK-25 Plasma Carbine': {
    'Custom Engineered': '105195B92D0CF94A9DACEB0682D1CF76',
    'Fourth Relic': 'C9B1C8668C3A67419B6AEBB20A98C8EB',
    'Glyphid Trophy Hunter': '99F8F81AE4BFC3499C447ED818F947BC',
    Mechanized: '0A9ABD0E86EA5D478B62F0C6FECC6246',
    Neonband: '1DB1EFB8D162AA4681107CB4326A89D7',
    'Scale Brigade': '413C3E29CC6DF74683B5197AC44A5D4D',
    Waster: '7181E477BB03324697C405A4F95AA2F2',
    "Builder's Choice": '63629598C749F14AB0019D797611AB5C',
    MilSpec: 'FBFD0D031C19174BA49013BDC5DA4EB5',
  },
  'Jury-Rigged Boomstick': {
    'Custom Engineered': 'F7A49F42665667418F0AEDE9843A8331',
    'Fourth Relic': 'AD8FCDFE884A594A8E4CEF328B87291E',
    'Glyphid Trophy Hunter': 'DBFC8021CB53DE40A0725FD5218E29EA',
    Mechanized: '27BAAE21D067E643BB2C785DD3F73D64',
    Neonband: '1322D7489E0731429F9D5B5F35A13251',
    'Scale Brigade': 'D8BCB1030E72CB4A8751D7F281F7FC83',
    Waster: '6D577733E75FEB4F9378471E97757D49',
    "Builder's Choice": '00AF5279C969C248A5611617B246EADC',
    MilSpec: '17DE50EF5AB50F43A392AAF233ECEA7E',
  },
  'Zhukov NUK17': {
    'Custom Engineered': 'D5C4C5A76D441A4CB5A2216759A6B933',
    'Fourth Relic': '3B0E32B217FF8F4EBA271C11AE6242D5',
    'Glyphid Trophy Hunter': 'C68D5D7EACA4964AB71E5F6921BB85A1',
    Mechanized: '1A8EADB57EB9444391D6769B3C070847',
    Neonband: '0F46B7676CD4064BB1111DE8881D93FF',
    'Scale Brigade': 'B23A6BB17D842A4891630877D47CF97E',
    Waster: 'A95A29516C4C1C41AEA1C995C4F3BFEB',
    "Builder's Choice": 'A932E740B82FDA4BBBBF08792284B833',
    MilSpec: '263202B30919034C99ABED4E657D1EF1',
  },
  'Nishanka Boltshark X-80': {
    'Custom Engineered': '53D7EFA84D48AC49B5F8C38AB9174ECC',
    'Fourth Relic': '583395E35DB58F4EAC26699557E9A432',
    'Glyphid Trophy Hunter': 'ECE544F15ABC0C4B84D387A50AF95058',
    Mechanized: 'F9B8E96C71FF2E459C3D06BA70175D17',
    Neonband: '3E4350A85723C847A89B388C57655570',
    'Scale Brigade': '9B1D97F7686B8B4DB460D6CBAC18F92E',
    Waster: '5D25EFDC62D5A349B69FC40987BE5286',
    "Builder's Choice": '3448724AA0A47F43A0213E929248CCB7',
    MilSpec: '351FADEE3668F746B5140F2AFE320A8D',
  },
};
