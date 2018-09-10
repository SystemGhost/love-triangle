/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count=0;
	var temp1 = 0;
	var temp2 = 0;
	var temp3 = 0;

	for(var i=0; i < preferences.length; i++) {
		temp1 = preferences[i];
		if(temp1 == 0) continue;
		temp1--;
		temp2 = preferences[temp1];
		if(temp2 == 0) continue;
		temp2--;
		if(temp2 == temp1) continue;
		temp3 = preferences[temp2];
		if(temp3 == 0) continue;
		temp3--;
		if(temp3 == temp2) continue;
		if(temp3 == i)
		{
			count++;
			preferences[temp2] = 0;
			preferences[temp1] = 0;
			preferences[temp3] = 0;
		}	
	}
	return count;
};
