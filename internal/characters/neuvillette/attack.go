package neuvillette

import (
	"fmt"

	"github.com/genshinsim/gcsim/internal/frames"
	"github.com/genshinsim/gcsim/pkg/core/action"
	"github.com/genshinsim/gcsim/pkg/core/attacks"
	"github.com/genshinsim/gcsim/pkg/core/attributes"
	"github.com/genshinsim/gcsim/pkg/core/combat"
	"github.com/genshinsim/gcsim/pkg/core/geometry"
)

const normalHitNum = 3

var (
	attackFrames   [][]int
	attackHitmarks = []int{23, 15, 26}
	attackHitboxes = []float64{1.0, 1.0, 1.5}
)

func init() {
	attackFrames = make([][]int, normalHitNum)

	attackFrames[0] = frames.InitNormalCancelSlice(attackHitmarks[0], 35)
	attackFrames[0][action.ActionAttack] = 30
	attackFrames[0][action.ActionCharge] = 26
	attackFrames[0][action.ActionSkill] = 21
	attackFrames[0][action.ActionBurst] = 21
	attackFrames[0][action.ActionDash] = 21
	attackFrames[0][action.ActionJump] = 23
	attackFrames[0][action.ActionSwap] = 21

	attackFrames[1] = frames.InitNormalCancelSlice(attackHitmarks[1], 31)
	attackFrames[1][action.ActionAttack] = 22
	attackFrames[1][action.ActionCharge] = 23
	attackFrames[1][action.ActionSkill] = 13
	attackFrames[1][action.ActionBurst] = 13
	attackFrames[1][action.ActionDash] = 13
	attackFrames[1][action.ActionJump] = 13
	attackFrames[1][action.ActionSwap] = 13

	attackFrames[2] = frames.InitNormalCancelSlice(attackHitmarks[2], 45)
	attackFrames[2][action.ActionAttack] = 38
	attackFrames[2][action.ActionCharge] = 37
	attackFrames[2][action.ActionSkill] = 24
	attackFrames[2][action.ActionBurst] = 24
	attackFrames[2][action.ActionDash] = 26
	attackFrames[2][action.ActionJump] = 25
	attackFrames[2][action.ActionSwap] = 24
}

func (c *char) Attack(p map[string]int) (action.Info, error) {
	ai := combat.AttackInfo{
		ActorIndex: c.Index,
		Abil:       fmt.Sprintf("Normal %v", c.NormalCounter),
		AttackTag:  attacks.AttackTagNormal,
		ICDTag:     attacks.ICDTagNormalAttack,
		ICDGroup:   attacks.ICDGroupDefault,
		StrikeType: attacks.StrikeTypeDefault,
		Element:    attributes.Hydro,
		Durability: 25,
		Mult:       attack[c.NormalCounter][c.TalentLvlAttack()],
	}

	c.Core.QueueAttack(
		ai,
		combat.NewCircleHitOnTarget(
			c.Core.Combat.PrimaryTarget(),
			geometry.Point{},
			attackHitboxes[c.NormalCounter],
		),
		attackHitmarks[c.NormalCounter],
		attackHitmarks[c.NormalCounter],
	)

	defer c.AdvanceNormalIndex()

	return action.Info{
		Frames:          frames.NewAttackFunc(c.Character, attackFrames),
		AnimationLength: attackFrames[c.NormalCounter][action.InvalidAction],
		CanQueueAfter:   attackFrames[c.NormalCounter][action.ActionSwap],
		State:           action.NormalAttackState,
	}, nil
}
