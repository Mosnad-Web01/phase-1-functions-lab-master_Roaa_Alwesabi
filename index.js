// 1. حساب المسافة من المقر بعدد الشوارع
function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    return Math.abs(pickupLocation - headquartersLocation);
}

// 2. تحويل المسافة إلى أقدام
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}

// 3. حساب المسافة المقطوعة بالأقدام بين نقطتين
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

// 4. حساب تكلفة الرحلة بناءً على المسافة
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0; // المسافة أقل من 400 قدم مجانية
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02; // 2 سنت لكل قدم بعد 400 قدم
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // تكلفة ثابتة قدرها 25 دولار
    } else {
        return 'cannot travel that far'; // الرحلة غير مسموح بها إذا تجاوزت المسافة 2500 قدم
    }
}
