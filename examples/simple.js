const periTemplating = require("..");

async function run() {
    await periTemplating.API.load();
    const api = new periTemplating.API();
    try {
        console.info(await api.info());
    } catch (err) {
        console.error(`[ERROR] ${err.code || ""} ${err.message}`);
    }
}

run();
