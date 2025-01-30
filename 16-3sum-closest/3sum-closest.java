class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int res=0;
        int gap=Integer.MAX_VALUE;

        for(int i=0;i<nums.length-2;i++){
            int li=i+1;
            int ri=nums.length-1;
            while(li<ri){
                int sum=nums[i]+nums[li]+nums[ri];
                if(sum<target){
                    if(target-sum<gap){
                        gap=target-sum;
                        res=sum;
                    }
                    li++;
                }else if(sum>target){
                    if(sum-target<gap){
                        gap=sum-target;
                        res=sum;
                    }
                    ri--;


                }else{
                    return target;
                }
            }
        }
        return res;
        
    }
}