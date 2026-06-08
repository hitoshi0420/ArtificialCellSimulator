/**
 * 人造细胞世界模拟系统 - 配置文件
 * 修改此文件后刷新页面即可生效
 */
const APP_CONFIG = {
    // 基础参数
    gridSize: 10,           // 地图大小 N×N (3~1280)
    initCount: 10,         // 初始细胞数 (1~4096)
    framesPerSecond: 5,     // 演化速度 Ticks/秒 (1~30)

    // 生命周期与死亡
    maxLifespan: 20,        // 初始/最大寿命 (Ticks)
    congestionLimit: 6,     // 拥挤致死邻居数 ≥
    isolationLimit: 10,     // 孤独致死时间 (Ticks)

    // 分裂规则
    splitMin: 10,           // 分裂寿命窗口下限
    splitMax: 15,           // 分裂寿命窗口上限
    densityProbabilityFactor: 3.0,  // 拥挤抑制因子

    // 病毒规则
    virusDensityStart: 50,  // 病毒激活密度 (%)
    virusDensityStop: 10,   // 病毒清除密度 (%)
    virusGenerationPro: 1.0, // 病毒生成概率 (%)
    virusAccelHigh: 10,     // 加速死亡倍率 (非分裂期)
    virusAccelLow: 5,       // 加速死亡倍率 (分裂期)

    // 日志
    logInterval: 10,        // 日志记录间隔 (Ticks)
};
